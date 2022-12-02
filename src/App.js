import React from "react";
import { useState } from "react";
import Board from "./components/Board";
import Score from "./components/Score";
import Button from "./components/Button";
import Popup from "./components/Popup";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [score, setScore] = useState({ xScore: 0, tieScore: 0,oScore: 0});
  const [isStart, setIsStart] = useState(true);
  const [players, setPlayers] = useState({ pl1 : '', pl2: '' })

  const handleCellClick = (cellInd) => {

    if (checkIsWin(board)) {
      return
    }

    let updatedBoard = board;
    updatedBoard[cellInd] = isXTurn ? "x" : "o";

    setBoard(updatedBoard);
    
    const winner = checkIsWin(board);
    if (winner) {
      if (winner === "x") {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore })
      } else if (winner === "o") {
        let { oScore } = score;
        oScore++;
        setScore({ ...score, oScore })
      } else {
        let { tieScore } = score;
        tieScore++;
        setScore({ ...score, tieScore })
      }
      setTimeout(() => setBoard(Array(9).fill(null)), 1500);
    }
    setIsXTurn(!isXTurn);
  }

  const checkIsWin = (board) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
      let [x, y, z] = winningPatterns[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x];
      }
    }
    if (!board.includes(null)) {
      return 'tie';
    } else return null;
  }

  const resetGame = () => {
    setIsXTurn(true);
    setBoard(Array(9).fill(null));
    setScore({ xScore: 0, tieScore: 0, oScore: 0});
    setIsStart(true);
    setPlayers({ pl1 : '', pl2: '' });
  }

  const startGame = () => {
    setIsStart(false);
  }

  return (
    <div className='App p-8 bg-gradient-to-t from-cyan-300 to-teal-100 w-screen min-h-screen flex justify-center items-center font-mono'>

      {isStart ? 
      <Popup players={players} setPlayers={setPlayers} startGame={startGame}/> :
      <div className='w-full h-full flex flex-col justify-center items-center'>
      <Board board={board} handleCellClick={handleCellClick}/>
      <Score players={players} isXTurn={isXTurn} score={score}/>
      <Button handleClick={resetGame}>Reset</Button>
      </div>
      }
        
    </div>
  );
}

export default App;
