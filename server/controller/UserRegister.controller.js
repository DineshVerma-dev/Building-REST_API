import User from "../models/Users.model.js";

const UserRegister = async(req,res) => {
    try {
        const {name ,email ,password}= req.body
        const response  =  new User({name ,email ,password})
        const data = await response.save()
        console.log(data)
        res.status(200).json(data)

      
    } catch (error) {
        console.log("error in userRegister",error)
        res.status(500).json({error : " data not  saved "})
    }
}

export { UserRegister}