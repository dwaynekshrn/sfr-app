const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Ninja = mongoose.model('ninjas');

passport.use(new LocalStrategy(
  function(username, password, done) {

    Ninja.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user, console.log('User is logged in'));
    })
  },
  accessToken => {
    console.log(accessToken);
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});