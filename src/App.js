import React from "react";
import Board from "./components/Board";
import Score from "./components/Score";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [score, setScore] = useState({ xScore: 0, tieScore: 0,oScore: 0});
  const [winning, setWinning] = useState(null);

  const handleCellClick = (cellInd) => {

    if (checkIsWin(board)) {
      return
    }

    let updatedBoard = board;
    updatedBoard[cellInd] = isXTurn ? "x" : "o";

    setBoard(updatedBoard);
    
    const winner = checkIsWin(board);
    if (winner) {
      if (winner[0] === "x") {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore })
      } else if (winner[0] === "o") {
        let { oScore } = score;
        oScore++;
        setScore({ ...score, oScore })
      } else {
        let { tieScore } = score;
        tieScore++;
        setScore({ ...score, tieScore })
      }
      setWinning(winner[1]);
      setTimeout(() => setBoard(Array(9).fill(null)), 2000);
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
        return [board[x], [x, y, z]];
      }
    }
    return null;
  }

  return (
    <div className='App p-8 bg-gradient-to-t from-cyan-300 to-teal-100 w-screen min-h-screen flex flex-col justify-center items-center font-mono'>
      <Board winning={winning} board={board} handleCellClick={handleCellClick}/>
      <Score isXTurn={isXTurn} score={score}/>
    </div>
  );
}

export default App;
