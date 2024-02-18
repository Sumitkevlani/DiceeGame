import User from '../models/UserModel.js';

async function registerUser(name, email, password){
    const user = await User.create({
            name,
            email,
            password,
        });
}

export default registerUser;