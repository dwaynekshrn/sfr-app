const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NinjaSchema = new Schema({
  userId: String,
  accountType: {
   type: String,
   enum: ['Cop', 'Pirate', 'Monk', 'Ninja'],
   default: 'Cop'
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: Date
});

NinjaSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};

module.exports = mongoose.model('ninjas', NinjaSchema);
