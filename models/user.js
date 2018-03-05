const mongoose = require("mongoose"),
       bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email:String,
    firstName:String,
    lastName:String
});

UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(8, function (err, salt) {
    if (err) {
      return next();
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  })
});

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return callback(err)
    }

    callback(null, isMatch);
  })
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;