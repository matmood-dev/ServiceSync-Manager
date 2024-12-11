const mongoose = require('mongoose');

const extensionSchema = new mongoose.Schema({
    number: String,
    username: String,
    password: String,
    employee: String
});

module.exports = mongoose.model('Extension', extensionSchema);
