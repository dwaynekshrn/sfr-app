const express = require('express');
const app = express();

const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
require('./models/Ninjas');
require('./models/Meals');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({ secret: keys.secret, saveUninitialized: false, resave: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

require('./routes/ninjaRoutes')(app, passport);
require('./routes/mealRoutes')(app);

const port = process.env.PORT || 5050;
app.listen(port);