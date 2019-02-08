const express = require('express');
const bodyParser = require('body-parser');
const DishSchema = require('../models/dishesSchema');
const DishRouter = express.Router();

DishRouter.use(bodyParser.json());

DishRouter.route('/')
.get((req,res,next)=>{
    DishSchema.find({})
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
})

.post((req,res,next)=>{
    DishSchema.create(req.body)
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
})

.delete((req,res,next)=>{
    DishSchema.remove()
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(resp);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports = DishRouter;