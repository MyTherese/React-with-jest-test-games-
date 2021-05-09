
import React, {useState} from 'react';
import Square from './Square';
import styled from 'styled-components'
import calculateWinner from '../functions/CalculateWinner';


const Container = styled.section`
        display: grid;
        align-content: center;
        justify-content: center;
        grid-template-columns: repeat(3, 1fr);
        background: #379683;
        grid-gap: 30px;
        border: 6px solid #05386B;

`;



export default function Game () {
// state contains value from useState to update always setState(with the changed value)
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextTurn, setisNext] = useState(true);




const handleClick = (i) => {
    const squaresCopy = [...squares];
    
    setSquares(squaresCopy)
// check if thruthy or falsy
    if(squaresCopy[i]) {
        return null;
    }
// add x or o
    squaresCopy[i] = nextTurn ? 'X' : 'O';
// set next Turn if x is true setisNext to false to get O
    setisNext(!nextTurn);
    
};


const renderSquare = (i) => {
    return (
       
         <Square value={squares[i]} onClick={() => handleClick(i)}/>
        );

    }   



    let status;
    const winner = calculateWinner(squares);
    console.log(winner)
   
    status = winner ? `Winner is: ${winner}` : `Next player: ${nextTurn ? "X" : "O"}`;

    return(

    <div>
                <p>{status}</p>
       <Container>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
               
       </Container>


        </div>


  
    )

    }



















       


    


 

