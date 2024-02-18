
import User from '../models/UserModel.js';
async function loginUser(email, password){
    const user = await User.findOne({ email });
    if(!user){
        return null;
    }
    else{
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched){
            return null;
        }
        else{
            return user;
        }
    }
    return user;
}

export default loginUser;