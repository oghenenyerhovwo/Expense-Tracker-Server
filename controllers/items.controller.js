// Requiring models
const Item = require("../models/items.model")
const {itemValidation} = require("../validation/itemValidation")

function getItems(req, res){
    Item.find({})
        .then(items => res.status(200).json(items.reverse()))
        .catch(err => {
            console.log(err)
            res.status(400).json({ message: err})});
}

function postItems(req, res){
    const newItem = req.body
    itemValidation(
        res,
        req.body,
        () => {
            Item.create(newItem)
                .then(item => res.status(200).json(item))
                .catch(err => res.status(400).json({ message: err}))
        }
    )
    
}

function findAnItem(req, res){
    Item.findById(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(err => res.status(400).json({ message: err}));
}

const  updateAnItem =async (req, res) => {
    const formItem={
        itemName: req.body.itemName,
        amount: Number(req.body.amount),
        transactionType: req.body.transactionType,
    }
    itemValidation(
        res,
        formItem,
        async () => {
            try {
                const updateItem = await Item.findByIdAndUpdate(req.params.id, formItem, {new:true})
                return res.status(200).json(updateItem)
            } catch (err) {
                res.status(400).json({ message: err})
            }
        }
    )
}

function deleteAnItem(req, res){
    Item.findByIdAndDelete(req.params.id)
        .then(item => res.status(200).json(req.params.id))
        .catch(err => res.status(400).json({ message: err}));
}

module.exports = {
    getItems,
    postItems,
    findAnItem,
    updateAnItem,
    deleteAnItem,
}
