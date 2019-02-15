import React from 'react';
import Films from './Films';

function Characters(props){

    return(
        <li>
            <div className="character-card">
                <p>Name: {props.char.name}</p>
                <p>Weight: {props.char.mass} units of something.</p>
                <Films films = {props.char.films}/>
            </div>
        </li>
    );
}

export default Characters