const mongoose = require('mongoose');

const budgetItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 7,
        maxlength: 7 
    }
}, { collection: 'budget_data' });

module.exports = mongoose.model("budget_data", budgetItemsSchema);