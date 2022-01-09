// Requiring packages
const express = require('express');
const router = express.Router();

// Requiring controller functions
const {
    getItems,
    postItems,
    findAnItem,
    updateAnItem,
    deleteAnItem,
} = require("../controllers/items.controller")

router.get("/", (req, res) => {
    getItems(req, res)
});

router.post("/", (req, res) => {
    postItems(req, res)
});

router.get("/:id", (req, res) => {
    findAnItem(req, res)
});

router.put("/:id", (req, res) => {
    updateAnItem(req, res)
});

router.delete("/:id", (req, res) => {
    deleteAnItem(req, res)
});


module.exports = router