const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String },
    city: { type: String },
    reports: { type: [Number], default: [] },
    products: { type: [Number], default: [] },
});

module.exports = mongoose.model('Store', storeSchema);