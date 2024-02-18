import axios from 'axios';

const updateScore = async (player, number) => {
    try {
        const config = { headers: { "Content-type": "application/json" }, withCredentials: true };
        const id = "65d215a443550b1e8a3ead75";
        const response = await axios.post(`/game/update-score`, { id, player, number }, config);
        console.log(response);

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to update score');
    }
};

export default updateScore;