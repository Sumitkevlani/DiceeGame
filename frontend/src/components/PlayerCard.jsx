import React from 'react'
import updateScore from '../functions/updateScore';

const PlayerCard = ({index}) => {

  const handleUpdateScore = async (playerNumber, number) => {
    try {
      await updateScore(playerNumber, number);
      console.log('Score updated successfully');
    } catch (error) {
      console.error('Failed to update score:', error.message);
    }
  };

  return (
    <div>
        <h2>Player {index}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '5px' }}>
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <button key={number} style={{ margin: '5px', padding: '10px', height: '50px', width: '50px', border: '1px solid black', borderRadius: '5px' }} onClick={() => handleUpdateScore(index,number)}>{number}</button>
              ))}
        </div>
    </div>
  )
}

export default PlayerCard;
