import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/reponse.handler.js";
import reponseHandler from "../handlers/reponse.handler.js";

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const checkUser = await userModel.findOne({ username });
    const checkEmail = await userModel.findOne({ email });
    if (checkUser) {
      return responseHandler.badrequest(
        res,
        "Username is already exists , Please try another"
      );
    }
    if (checkEmail) {
      return responseHandler.badrequest(
        res,
        "Email is already use, please try another email"
      );
    }
    const users = new userModel();
    users.username = username;
    users.email = email;
    users.setPassword(password);
    await users.save();
    const token = jsonwebtoken.sign(
      { data: users.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    reponseHandler.created(res, {
      token,
      ...users._doc,
      id: users.id,
    });
  } catch {
    responseHandler.error(res);
  }
};
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await userModel
      .findOne({ username })
      .select("username password salt id email");
    if (!users) return responseHandler.badrequest(res, "User not exist");
    if (!users.validPassword(password))
      return responseHandler.badrequest(
        res,
        "Wrong Password , Please Try Again"
      );
    const token = jsonwebtoken.sign(
      { data: users.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    users.password = undefined;
    users.salt = undefined;

    reponseHandler.created(res, {
      token,
      ...users._doc,
      id: users.id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const updatePassword = async(req,res) => {
    try {
        const {password , newPassword} = req.body;
        const users = await userModel.findById(req.users.id).select("password id salt")
        if(!users) return reponseHandler.unauthorize(res)
        if(!users.validPassword(password)) return responseHandler.badrequest(res,"Current Password is Wrong , Please try Again")
        users.setPassword(newPassword)
        await users.save()
        responseHandler.ok(res) 
    } catch {
        reponseHandler.error(res)
    }
}

// const forgotPassword = async(req,res) => {
//     try {
//         const {email} = req.body
//         const users = await userModel.findOne({email})
//         if(!users) return responseHandler.badrequest(res,"Your Email Does Not Exists")
//         const resetPasswordToken = jsonwebtoken.sign(
//             {data:users.id},
//             process.env.TOKEN_SECRET,
//             {expiresIn:"1h"}
//         )
//         users.resetPasswordToken = resetPasswordToken;
//         await users.save()
//     } catch  {
//         reponseHandler.error(res)
//     }
// }

const getInfo = async (req, res) => {
    try {
      const users = await userModel.findById(req.users.id);
  
      if (!users) return responseHandler.notfound(res);
  
      responseHandler.ok(res, users);
    } catch {
      responseHandler.error(res);
    }
  };
  
  export default {
    signup,
    signin,
    getInfo,
    updatePassword,
  };
  