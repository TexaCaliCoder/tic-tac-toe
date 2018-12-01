import React from 'react';
import { GameContainer } from '../styled-components/styles';


class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            board:Array(9).fill(''),
            player: 'O',
            ai: 'X',
        }
    }
    
    clicked=(e)=>{
        const {board}=this.state
        if (board[e.target.dataset.box] === '')
        {e.target.innerText= "O" 
        board[e.target.dataset.box]= 'O'
        let newBoard = board
        this.setState({
            board: newBoard
        })
    }
    else{ console.log('no!')}
    
    console.log(this.state.board)
    }
    emptySpaces=(board)=>{
        board.filter(index=> index !== 'O' && index !== 'X' )
    }
   
     winning=(board, player)=>{
        if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player)
        ) {
        return true;
        } else {
        return false;
        }
    }

    minimax = (newBoard, player) =>{
        let availableMoves = this.emptySpaces(newBoard);

        if(this.winning(newBoard, this.state.player)){
            return {score: 10 }
        }else if(this.winning(newBoard, this.state.ai)){
            return {score:-10 }
        }else if(availableMoves.length===0){
            return {score:0}
        }

    }

    render(){
        return(
            <GameContainer onClick={(e)=>this.clicked(e)}>
                <div className='square tl' data-box={0} > </div>
                <div className='square tm' data-box={1} > </div>
                <div className='square tr' data-box={2} > </div>
                <div className='square ml' data-box={3} > </div>
                <div className='square mm' data-box={4} > </div>
                <div className='square mr' data-box={5} > </div>
                <div className='square bl' data-box={6} > </div>
                <div className='square bm' data-box={7} > </div>
                <div className='square br' data-box={8} > </div>
            </GameContainer>
        )
    }

}
export default GameBoard;