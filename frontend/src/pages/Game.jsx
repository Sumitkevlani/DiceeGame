import React from 'react';
import PlayerCard from '../components/PlayerCard';

const Game = () => {
  return (
    <div style={{display: 'flex', gap: '5vw'}}>
        <PlayerCard index={1} />
        <PlayerCard index={2} />
        <PlayerCard index={3} />
    </div>
  )
};

export default Game;
