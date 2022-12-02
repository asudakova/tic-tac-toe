import React from 'react';

const Cell = ({value, onClick}) => {
   return (
      <div onClick={onClick}
      className='w-20 h-20 bg-white flex flex-col justify-center items-center text-5xl font-medium rounded-lg shadow-md shadow-indigo-500/60 hover:shadow-indigo-800/80 cursor-pointer'>
         <p className={value === 'x' ? 'text-emerald-500' : 'text-violet-700'}>{value}</p>
      </div>
   );
};

export default Cell;