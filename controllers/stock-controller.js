const stockModel = require ('../models/stock.model');
const stockModel2 = require ('../models/stock.model');


const create = async (req, res, next )=>{


    try {
        const newStock = new stockModel(req.body );
        const savedStock = await newStock.save();

        console.log(savedStock);

        res.status(201).json ({
            message : 'stock created successfully',
            stock : savedStock
        })

    } catch (error){
        res.status(500).send ("failed to create stock");
    }
}

const list = async (req, res, next)=>{
    try {
        var stock = await stockModel.find({});
        res.status(200).json({stock});
    }catch (error){
        res.status(500).send ("error ocured while fetching stock");
    }
}

const update = async (req, res, next)=>{
    
}

const remove = async (req, res, next )=>{

}

const  findById = async (req, res, next)=>{

}

const findEmail = async (req,res , next )=>{

}

module.exports = {
    create, update,remove, findById, findEmail,list
}