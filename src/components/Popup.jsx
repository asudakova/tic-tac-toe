import React from 'react';
import Button from './Button';

const Popup = ({players, setPlayers, startGame}) => {
   let { pl1 } = players;
   let { pl2 } = players;
   return (
      <div className='bg-white rounded-lg p-5 flex flex-col items-center'>
         <h1 className='text-xl mb-3'>Welcome to a Tic Tac Toe game!</h1>
         <p className='self-start mb-2'>Please, enter your names:</p>
         <input 
         value={pl1}
         onChange={event => setPlayers({...players, pl1: event.target.value})}
         className='self-start mb-2 w-full p-1 rounded-md border-2 outline-0 focus:border-emerald-500'
         type="text" 
         placeholder='Player 1'
         />
         <input 
         value={pl2}
         onChange={event => setPlayers({...players, pl2: event.target.value})}
         className='self-start mb-5 w-full p-1 rounded-md border-2 outline-0 focus:border-violet-700'
         type="text" 
         placeholder='Player 2'
         />
         <Button handleClick={startGame}>Let's go</Button>
      </div>
   );
};

export default Popup;