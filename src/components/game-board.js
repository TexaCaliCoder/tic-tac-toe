import React from 'react';
import { GameContainer } from '../styled-components/styles';



class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            origBoard:Array(9).fill(''),
            user: 'O',
            ai: 'X',

        }
    }
    
    clicked=(e)=>{
        const {origBoard}=this.state

        if (origBoard[e.target.dataset.box] === ''){
        e.target.innerText= "O" 
        origBoard[e.target.dataset.box]= 'O'
        let newBoard = origBoard
        this.setState({
            origBoard: newBoard
        })
        // this.minimax(this.state.origBoard, this.state.ai)
    }
    
    console.log(this.state.board)
    }
    emptySpaces=(board)=>{
        // console.log('old',board);
        return board.filter(index=> index !== 'O' && index !== 'X' )
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

        console.log('newboard:', newBoard)
        const availableMoves = this.emptySpaces(newBoard);
        let moves = [];
        
        if(this.winning(newBoard, this.state.user)){
            return {score: 10 }
        }else if(this.winning(newBoard, this.state.ai)){
            return {score:-10 }
        }else if( !availableMoves.length ){
            return {score:0}
        }
        
        
        for(let i = 0; i < availableMoves.length; i++){
            let move={};
            move.index = newBoard[availableMoves[i]];
            newBoard[availableMoves[i]]= player;
            if(player === this.state.ai){
                let result = this.minimax(newBoard, this.state.user);
                move.score = result.score;
            }else{
                const result = this.minimax(newBoard, this.state.ai);
                move.score=result.score
            }
            newBoard[availableMoves[i]] = move.index;
            moves.push(move)
        }
        
        if(player === this.state.ai){
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++){
                if(moves[i].score>bestScore){
                    bestScore=moves[i].score;
                    this.setState({bestMove: i})
                }
            }
            }else{
                let bestScore=10000;
                for (let i = 0; i<moves.length; i++){
                    if(moves[i].score < bestScore){
                        bestScore=moves[i].score;
                        this.setState({bestMove:i})
                    }
                }
                return moves[this.state.bestMove]
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