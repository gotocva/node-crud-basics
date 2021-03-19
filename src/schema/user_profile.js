const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  dob: {
      type: String,
      required: true
  },
  address: String,
  image: String,
  phone_number: String,
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);