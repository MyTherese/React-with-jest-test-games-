import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    display: block;
    marginRight: 10px;
    margin: 0 5px 5px 0; 
    height: 100px;
    width:100%;
    background-color: #8EE4AF;
  

    `


const Square = (props) => {
    return(
    <div>
        <Button onClick={props.onClick}>{props.value}</Button>  
    </div>
    );
   }





export default Square