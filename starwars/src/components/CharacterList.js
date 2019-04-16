import React from 'react';
import Characters from './Characters';


function CharacterList(props) {
   
    return (
        <div className="list-components">
            <h1>Star Wars Characters:</h1>
            <h2>Your important questions answered: How Much Do They Weigh???</h2>
            <div className="list-container">
                <ul>
                    {props.chars.map(char => {
                        return <Characters char={char} key={char.created}/> 
                    })}   
                </ul>
            </div>
            
        </div>
        
    )
}

export default CharacterList;