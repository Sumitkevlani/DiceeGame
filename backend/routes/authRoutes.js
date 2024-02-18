import express from 'express';
import registerUser from '../controllers/registerController.js';

const router = express.Router();


router.post('/register',(req,res)=>{
    const {name, email, password} = req.body;
    try{
        registerUser(name, email, password);
        res.status(200).json({
            message: "User registered successfully",
            success: true
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    try {
        loginUser(email, password);
        
        res.status(200).json({
            message: "User registered successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
});

export default router;