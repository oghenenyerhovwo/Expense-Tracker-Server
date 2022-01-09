const Joi = require('joi');

const itemSchema = Joi
                .object()
                .keys({ 
                    itemName: Joi.string().min(1).required(),
                    amount: Joi.number().required(),
                    transactionType: Joi.string().required(),
                })

const itemValidation = async (res, data, next) => {
    const {error} = itemSchema.validate(data)
    if(error){
      return res.status(400).json({ message: error})
    } else{
      next()
    }
          // next()
         
}

module.exports= {itemValidation}
