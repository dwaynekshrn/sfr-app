const mongoose = require('mongoose');
const Meals = mongoose.model('meals');

module.exports = app => {

  app.get('/api/meals', async (req, res) => {
    const meals = await Meals.find();
    res.send(meals);
  });

  app.post('/api/meals', async (req, res) => {
   const { meal1_id, meal2_id, language, description, title, genre, release_date, poster, meal_poster, meal_src, subtitle, srt, director, actors, studios, ratings, hrs, mins, year } = req.body;
   
   const movie = new Meals({
    meal1_id, 
    meal2_id, 
    language, 
    description, 
    title, 
    genre, 
    release_date, 
    poster, 
    meal_poster,
    meal_src, 
    subtitle, 
    srt, 
    director, 
    actors: actors.split(',').map(actor => ({ actor: actor.trim() })),
    studios: studios.split(',').map(studio => ({ studio: studio.trim() })),
    ratings,
    hrs, 
    mins, 
    year
   });

   console.log(movie);

   await movie.save();

});


};