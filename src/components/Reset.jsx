import React from 'react';

const Reset = ({resetBoard}) => {
   return (
      <button 
      className='uppercase py-2 px-3 rounded-lg bg-cyan-100 shadow-md shadow-indigo-500/60 hover:shadow-indigo-800/80 active:shadow-inner active:shadow-indigo-800/80'
      onClick={resetBoard}
      >
         Reset
      </button>
   );
};

export default Reset;