
import React, {useState} from 'react';

function ScoreBoard() {
// const runs=169;
// const wickets=4;
const [count, setCount]=useState(0)

const [wicket, setWickets]=useState(0)

const wickets=()=>{
  setWickets(wicket + 1)
}

const increasebyone = ()=>{
setCount(count + 1)
}
const increasebytwo = ()=>{
  setCount(count + 2)
  }
const increasebythree = ()=>{
 setCount(count + 3)
    }
 const increasebyfour = ()=>{
 setCount(count + 4)
      }
 const increasebysix = ()=>{
 setCount(count + 6)
        }

  return (
    <div>
     <div>
  
      {/* <h2>Runs and wickets</h2> */}
      <h1>{count}/{wicket}</h1>

      <button onClick={increasebyone} >+1</button>
      <button onClick={increasebytwo} >+2</button>
      <button onClick={increasebythree} >+3</button>
      <button onClick={increasebyfour} >+4</button>
      <button onClick={increasebysix} >+6</button>

      <button onClick={wickets}>+1</button>
  
    </div>

    <div></div>

  
    </div>
  )
}

export default ScoreBoard