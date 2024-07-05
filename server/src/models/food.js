const mongoose = require('mongoose');
    const foodScheme = mongoose.Schema({
        name: String,
        price: Number,
        desc: String,
        imageUrl: String
    });


    const Food = mongoose.model('Food',foodScheme)
