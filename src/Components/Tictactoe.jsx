import React,{useState} from 'react'
import '../index.css'
let Tictactoe = () => {
    let [state,setState]=useState("")
    let [state1,setState1]=useState("")
    let [state2,setState2]=useState("")
    let [state3,setState3]=useState("")
    let [state4,setState4]=useState("")
    let [state5,setState5]=useState("")
    let [state6,setState6]=useState("")
    let [state7,setState7]=useState("")
    let [state8,setState8]=useState("")
    let [state9,setState9]=useState("")
  return (
    <div id='box'>
       <h1>Tic-Tac-Toe Game</h1>
      <table>
        <tbody>
        <tr>
        <td><button onClick={()=>setState1(state)} className='btn'>{state1}</button></td>
        <td><button onClick={()=>setState2(state)} className='btn'>{state2}</button></td>
        <td><button onClick={()=>setState3(state)} className='btn'>{state3}</button></td>
        </tr>
        <tr>
        <td><button onClick={()=>setState4(state)} className='btn'>{state4}</button></td>
        <td><button onClick={()=>setState5(state)} className='btn'>{state5}</button></td>
        <td><button onClick={()=>setState6(state)} className='btn'>{state6}</button></td>
        </tr>
        <tr>
        <td><button onClick={()=>setState7(state)} className='btn'>{state7}</button></td>
        <td><button onClick={()=>setState8(state)} className='btn'>{state8}</button></td>
        <td><button onClick={()=>setState9(state)} className='btn'>{state9}</button></td>
        </tr>
        </tbody>
      </table>
      <button onClick={()=>setState("X")} id='p1'>Player 1</button>
      <button onClick={()=>setState("O")} id="p2">Player 2</button>
      <button onClick={result} id='res'>Result</button>
    </div>
  )
  function result(){
    if((state1==="X"&&state2==="X"&&state3==="X")||(state4==="X"&&state5==="X"&&state6==="X")||(state7==="X"&&state8==="X"&&state9==="X")||(state1==="X"&&state4==="X"&&state7==="X")||(state2==="X"&&state5==="X"&&state8==="X")||(state3==="X"&&state6==="X"&&state9==="X")||(state1==="X"&&state5==="X"&&state9==="X")||(state3==="X"&&state5==="X"&&state7==="X")){
     alert("Congratulations..  X wins the game")
    }
    else if((state1==="O"&&state2==="O"&&state3==="O")||(state4==="O"&&state5==="O"&&state6==="O")||(state7==="O"&&state8==="O"&&state9==="O")||(state1==="O"&&state4==="O"&&state7==="O")||(state2==="O"&&state5==="O"&&state8==="O")||(state3==="O"&&state6==="O"&&state9==="O")||(state1==="O"&&state5==="O"&&state9==="O")||(state3==="O"&&state5==="O"&&state7==="O")){
     alert("Congratulations.. O wins the game")
    }
    else{
        alert("It's a Tie")
    }
}}
export default Tictactoe