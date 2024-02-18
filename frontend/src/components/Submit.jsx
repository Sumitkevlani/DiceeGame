import React from 'react';
import generateScore from '../functions/provideScore';

const Submit = () => {
    return (
        <div style={{margin: '20px', padding: '10px'}}>
            <button type="submit" style={{backgroundColor: 'blue', color: 'white'}} onClick={generateScore}>Submit</button>
        </div>
    );
};

export default Submit;
