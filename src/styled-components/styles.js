import styled from 'styled-components';


// --------------->GameBoard.js<----------------------
export const GameContainer = styled.div `
    border: 2px solid black;
    width: 60%;
    margin: 0 auto;
    height: 80vh;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;

    .square{
        width: 33%;
        border: 5px  solid #4a72b2;

    }
    .tl{
        border-left: none;
        border-top: none;
    }
    .tm{
        border-top:none;
    }
    .tr{
        border-top: none;
        border-right: none;
    }
    .ml{
        border-left: none;
    }
    .mr{
        border-right: none;
    }
    .bl{
        border-left: none;
        border-bottom: none;
    }
    .bm{
        border-bottom:none;
    }
    .br{
        border-right: none;
        border-bottom: none;
    }
    
`