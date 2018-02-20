const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

const Ninja = mongoose.model('ninjas');

module.exports = app => {

app.post('/auth/register', async (req, res) => {
  const { accountType, username, email, password } = req.body;

          const ninja = new Ninja({
            accountType, 
            username, 
            email, 
            password,
            date: Date.now() 
          });
            ninja.email = email;

            try {
            console.log(ninja);
            await ninja.save();
            } catch(err) {
              res.status(422).send(err);
            }
});


 app.post('/auth/login',
  passport.authenticate('local'),
  function(req, res) {
    res.redirect('/user/' + req.user.username);
  });

app.get('/auth/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        resave.req.user.username;
        return res.redirect('/user/' + req.user.username);
      });
    })(req, res, next);
  });   
  
  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.send(req.user);
    res.redirect('/');
});

app.get('/api/current_user', function(req, res){
res.send(req.user);
});

};



