const Usermodel = require ('../model/User')

const Registration = async(req,res)=>{
    try {

// Log the request body to inspect its contents
console.log('Request Body:', req.body);

// Check if req.body is defined and contains the 'email' property
if (!req.body || !req.body.email) {
    return res.status(400).send({
        success: false,
        message: 'Invalid request body. Email is required.'
    });
}

        const existinguser = await Usermodel.findOne({email:req.body.email})
        if(existinguser){
           return res.send({
            success:false,
            message:' user already exist'
           })
        }else{
            const newuser = new Usermodel(req.body)
            await newuser.save()
            return res.send({
                success:true,
                message:'user created'
            })
        }
    } catch (error) {
        console.log({
            error,
            message:'user not create because of some error check user registration'
        })
    }
}

module.exports = Registration;