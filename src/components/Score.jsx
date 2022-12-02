import React from 'react';

const Score = ({isXTurn, score}) => {
   return (
      <div className='flex my-8 text-md bg-white rounded-lg shadow-md shadow-indigo-500/60 p-1 '>
         <div className={`flex flex-col items-center rounded-lg p-1 ${isXTurn ? 'bg-emerald-200' : ''}`}>
            <p className='font-thin'>Player1(x)</p>
            <p className='text-xl font-bold'>{score.xScore}</p>
         </div>
         <div className='flex flex-col items-center mx-5 p-1'>
            <p className='uppercase font-thin'>Tie</p>
            <p className='text-xl font-bold'>{score.tieScore}</p>
         </div>
         <div className={`flex flex-col items-center rounded-lg p-1 ${isXTurn ? '' : 'bg-violet-300'}`}>
            <p className='font-thin'>Player2(o)</p>
            <p className='text-xl font-bold'>{score.oScore}</p>
         </div>
      </div>
   );
};


export default Score;