'use client';
import { useState } from 'react';

type Props={value:string,event:any}

function Square({value,onSquareClick}:Props){
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>

  );
}

import styles from './style.module.css'
export default function Home() {
  const [gameList,setGameList]=useState<string[]>(Array(9).fill(""))
  const [nextValue,setNextValue]=useState<string>("x")
  const handleClick=(i:number)=>{
      const tmpList=gameList.slice()
      tmpList[i]=nextValue
      setGameList(tmpList)
      if (nextValue=='x'){
        setNextValue('o')
      }
      else{
        setNextValue('x')
      }
  } 


  return (
    <>
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
    </>
    
  );
}
