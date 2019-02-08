const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name:
    {
        type : String,
        required : true
    },
    description:
    {
        type : String,
        required : true
    },
    rating:
    {
        type : Number,
        required : true
    }
},
    {
        timestamps : true
    });

var DishSchema = mongoose.model('dish',dishSchema);

module.exports = DishSchema;