'use client';
import { useState } from 'react';

type Props={value:string,onSquareClick:any}

function Square({value,onSquareClick}:Props){
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>

  );
}

function calcWinner(squares:string[]):boolean{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      
      return true;
    }
  }
  return false;
}

import styles from './style.module.css'
export default function Home() {
  const [gameList,setGameList]=useState<string[]>(Array(9).fill(""))
  const [nextValue,setNextValue]=useState<string>("x")
  const [endText,setEndText]=useState<string>("")
  
  const handleClick=(i:number)=>{
      
      const isEnd:boolean = !(endText==="")
      if (!gameList[i] && !isEnd){
        const tmpList=gameList.slice()
        tmpList[i]=nextValue
        setGameList(tmpList)
        
        //console.log(tmpList)
        if (calcWinner(tmpList)){
          setEndText(`Winner: player\"${nextValue}\"`)  
        }
        else if (nextValue=='x'){
          setNextValue('o')
        }
        else{
          setNextValue('x')
        }

      }
  } 


  return (
    <div className={styles.field}>
      <div>
        <div className={styles.boardrow}>
          <Square value={gameList[0]} onSquareClick={()=>handleClick(0)} />
          <Square value={gameList[1]} onSquareClick={()=>handleClick(1)} />
          <Square value={gameList[2]} onSquareClick={()=>handleClick(2)} />
        </div>
        <div className={styles.boardrow}>
          <Square value={gameList[3]} onSquareClick={()=>handleClick(3)} />
          <Square value={gameList[4]} onSquareClick={()=>handleClick(4)} />
          <Square value={gameList[5]} onSquareClick={()=>handleClick(5)} />
        </div>
        <div className={styles.boardrow}>
          <Square value={gameList[6]} onSquareClick={()=>handleClick(6)} />
          <Square value={gameList[7]} onSquareClick={()=>handleClick(7)} />
          <Square value={gameList[8]} onSquareClick={()=>handleClick(8)} />
        </div>
      </div>
      <div>
        {endText}  
      </div>
    </div>
    
  )
}
