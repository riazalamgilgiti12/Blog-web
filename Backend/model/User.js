const { type } = require("@testing-library/user-event/dist/type")
const  mongoose  = require("mongoose")


const UserSchema = new mongoose.Schema({

    name :{
        type:String,
        require:[ true,'name is required'] },

email:{
    type:String,
    require:[true,'email is required']
},
contact:{
    type:Number,
    require:[true,'phone number is required']

},
password :{
    type:String,
    require:[true,'password is required']
},
confirmpassword:{
    type:String,
    require:[true,'password require'],
    validate:{
        validator:function(confirmpassword){
            return confirmpassword === this.password
        },
        message:'password do not match'
    }
}





})

module.exports = mongoose.model('user', UserSchema)