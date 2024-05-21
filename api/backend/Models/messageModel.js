const mongoose = require('mongoose')

const meesageModel = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
    content:{type:String, trim: true},
    sender:{type:mongoose.Schema.Types.ObjectId, ref: "Char"},
},
{
    timestamps: true,
}
)

const Message = mongoose.model("Message", meesageModel);
module.exports = Message;