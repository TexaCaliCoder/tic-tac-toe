import React from 'react';
import styled from 'styled-components';

const GameContainer = styled.div `
    border: 2px solid black;
    width: 60%;
    margin: 0 auto;
    height: 80vh;
    .moveLocation{
        
    }
    .tl{
        border: 2px none solid solid none black;
    }
`
class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

   
    render(){
        return(
            <GameContainer >
                <div className='moveLocation tl' > </div>
                <div className='moveLocation tm' > </div>
                <div className='moveLocation tr' > </div>
                <div className='moveLocation ml' > </div>
                <div className='moveLocation mm' > </div>
                <div className='moveLocation mr' > </div>
                <div className='moveLocation bl' > </div>
                <div className='moveLocation bm' > </div>
                <div className='moveLocation br' > </div>
            </GameContainer>
        )
    }

}
export default GameBoard;