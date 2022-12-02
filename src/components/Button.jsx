import React from 'react';

const Button = ({handleClick, children}) => {
   return (
      <button 
      className='max-w-30 uppercase py-2 px-3 rounded-lg bg-cyan-100 shadow-md shadow-indigo-500/60 hover:shadow-indigo-800/80 active:shadow-inner active:shadow-indigo-800/80'
      onClick={handleClick}
      >
         {children}
      </button>
   );
};

export default Button;