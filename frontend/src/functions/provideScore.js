import axios from 'axios';

const generateScore = async () => {
    try {
        const config = { headers: { "Content-type": "application/json" }, withCredentials: true };
        const id = "65d215a443550b1e8a3ead75";
        const response = await axios.get(`/game/get-winner`, { id }, config);
        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default generateScore;