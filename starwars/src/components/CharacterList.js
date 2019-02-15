import React from 'react';
import Characters from './Characters'

function CharacterList(props) {
    return (
        <ul>
            {props.chars.map(char => {
                return <Characters char={char} key={char.created}/> 
            })}
           
        </ul>
    )
}

export default CharacterList;