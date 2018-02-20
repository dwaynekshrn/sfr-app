const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActorsSchema = new Schema({
    actor: String
});

module.exports = ActorsSchema;