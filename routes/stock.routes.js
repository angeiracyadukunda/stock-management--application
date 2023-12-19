const express = require ('express');
const stockRoutes = express.Router();
const {create , findById, list , remove, update} = require('../controllers/stock-controller');


stockRoutes.get ('/list' , list);
stockRoutes.post ('/list' , create);
stockRoutes.get  ('/list' , findById);
stockRoutes.get ('/list' , update);
stockRoutes.delete ('/list' , remove);

module.exports = stockRoutes;
