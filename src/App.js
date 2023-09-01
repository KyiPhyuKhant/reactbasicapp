import { useState } from "react";



export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update seperately</h1>
      <MyButton count={count}  onClick={handleClick}/>
      <MyButton count={count}  onClick={handleClick}/>


    </div>
  );

}


function MyButton({count, onClick}) {


  return (
    <button onClick={onClick}>
      Click {count} times
    </button>
  );
}


// created Tutorial-Tic-Tac-Toe branch
