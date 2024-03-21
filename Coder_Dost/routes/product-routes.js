const express=require('express');
const productRouter=express.Router();
const controller=require('../controller/product');


//---we have set /products in server.js under app.use('/products',router);
productRouter
    .post('/',controller.createProduct)

//Get Request
    .get('/view',controller.getProduct)

//Update Request
    .put('/:id',controller.replaceProduct)
//The only difference between put and patch is put override all the element but patch updates the selected and also keep the
//old values or properties.
    .patch('/:id', controller.updateProduct)

//DELETE

    .delete('/:id', controller.deleteProduct)

exports.routes=productRouter;