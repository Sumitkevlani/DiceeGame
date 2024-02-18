
import express from 'express';
import User from '../models/UserModel.js';
const router = express.Router();

router.post('/update-score',async (req,res)=>{
    try{
        const {id, player, number} = req.body;
        
        const playerNumber = parseInt(player);
        console.log(id,playerNumber,number);
        const user = await User.findOne({_id: id});
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        const players = user.players;
        const playerIndex = playerNumber - 1; 
        if (playerIndex < 0 || playerIndex >= players.length) {
            return res.status(400).json({
                success: false,
                message: 'Invalid player number'
            });
        }
        const chosenNumber = number.toString();
        const currentPlayerMap = players[playerIndex];
        const currentNumberCount = currentPlayerMap.get(chosenNumber) || 0;
        currentPlayerMap.set(chosenNumber, currentNumberCount + 1);

        user.markModified('players');

        await user.save();
        return res.status(200).json({
            success: true,
            message: 'Score updated successfully'
        });
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.toString()
        });
    }
});


router.get('/get-winner', async (req, res)=>{
    try{
        const {id} = req.body;
        const user = await User.findOne({_id: id});
        const players = user.players;
        const scores = {};
        let playerCount = 0;
        players.forEach((player)=>{
            let score = 0;
            for(const [key,value] of player){
                score = score + Math.floor(value /2);
            }
            const playerIndex = playerCount.toString();
            scores[playerIndex] = score;
            playerCount = playerCount + 1;
        });
        return res.status(200).json({
            success: true,
            winner: scores
        });
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.toString()
        });
    }
});


export default router;