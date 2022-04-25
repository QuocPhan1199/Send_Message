const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
     
    content: {
        type: String,
    },
    is_read:{
        type: Number,
        default: 0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    create_date:{
    type: Date,
      default: Date.now(),
    }

},{ timestamps: true });
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;