const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
     
    },
    lastName: {
      type: String,
      required: true,
     
    },
    image:{
      type:String
    },
  //   groups:[
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'groups',
  //     }
  // ],
    create_date: {
      type: Date,
      default: Date.now(),
    },
    is_active: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    token: 
      {
          type: String,
          // required: true,
        // refresh: {
        //   type: String,
        //   required: true,
        // },
      },
    
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
