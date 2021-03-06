const { model, Schema } = require("mongoose");
const PLM = require('passport-local-mongoose')
const friends = require("mongoose-friends")

const userSchema = new Schema(
  {
    name: String,
    email: String,
    genre: {
      default: 'Prefiero no decirlo',
      enum: ['Hombre', 'Mujer', 'Prefiero no decirlo'],
      type: String
    },
    country: String,
    age: Number,
    photo: {
      type: String,
      default:
        "https://theimag.org/wp-content/uploads/2015/01/user-icon-png-person-user-profile-icon-20.png"
    },
    friends: [String],
    events: [String],

    eventMatches: {
      type: Schema.Types.ObjectId,
      ref: "Matches"
    },

    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User"
    }
    
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = model("User", userSchema);