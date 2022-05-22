const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    ime:{
        type: String,
        required: true,
    },
    prezime: {
        type: String,
        required: true,
    },
    imeRoditelja: {
        type: String,
        required: true,
    },
    datumRodjenjaDjeteta: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    brojTelefona: {
        type: String,
        required: true,
        unique: true,
    },
    roditeljiZaposleni:{
       type: Boolean,
        default: false, 
        required:true,
    },
    adresaStanovanja:{
        type: String,
        required:true,
    },
    gradStanovanja:{
        type: String,
        required: true,
    },
    dijeteBezRoditelja:{
        type:Boolean,
        default:false,
        required:true
    },
    samohraniILIrazvedeni:{
        type:String,
        required:true,
    },
    rom:{
        type:Boolean,
        default:false,
        required:true,
    },
    bitneNapomene:{
        type:String,
        minlength: 0,
        maxlength:1000,
        required:false,
    },


});

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

const UserModel = mongoose.model("users",UserSchema);
module.exports  = UserModel;