const mongoose = require("mongoose");
const GroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    create_date: {
      type: Date,
      default: Date.now(),
    },
    is_read: {
      type: Number,
      default: 0,
    },
  //   users:[
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'users',
  //     }
  // ]
  },
  { timestamps: true }
);
const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
