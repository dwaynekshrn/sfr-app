const mongoose = require('mongoose');
const { Schema } = mongoose;
const ActorsSchema = require('./Actors');
const StudioSchema = require('./Studio');

const mealSchema = new Schema({
    meal1_id: String,
    meal2_id: String,
    language: String,
    description: String,
    title: String,
    genre: String,
    release_date: String,
    poster: String,
    meal_poster: String,
    meal_src: String,
    subtitle: {type: Boolean, default: false} ,
    srt: String,
    director: String,
    actors: [ActorsSchema],
    studios: [StudioSchema],
    ratings: String,
    hrs: Number,
    mins: Number,
    year: Number
});

mongoose.model('meals', mealSchema);