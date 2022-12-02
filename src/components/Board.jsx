import React from 'react';
import Cell from './Cell';

const Board = ({board, handleCellClick, winning}) => {
   return (
      <div className='grid grid-cols-3 gap-2'>
         {board.map((cell, index) => {
            return <Cell key={Date.now + index} value={cell} onClick={() => cell === null && handleCellClick(index)}/>
         })}
      </div>
   );
};

export default Board;