const Square =()=> <button className={styles.square}>1</button>


import styles from './style.module.css'
export default function Home() {
  return (
    <>
      <div className={styles.boardrow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardrow}>
        <Square />
        <Square />
        <Square />  
      </div>
      <div className={styles.boardrow}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
    
  );
}
