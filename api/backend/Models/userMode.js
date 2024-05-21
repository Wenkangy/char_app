const mongoose = require('mongoose')

const userSchema  = mongoose.Schema({
    name:{type: String, requiere: true},
    email:{type: String, requiere: true},
    password:{type: String, requiere: true},
    pic:{type: String, requiere: true , default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},

},
{
    timestamps: true,
}
)

const User = mongoose.model("User", userSchema);
module.exports = User;