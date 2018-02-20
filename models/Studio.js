const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudioSchema = new Schema({
    studio: String
});

module.exports = StudioSchema;