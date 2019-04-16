import React from 'react';

function Films(props){
    return(
        <div>
            {props.films.map((film, index) => {
               return(<li><a key={index} href={film}>A film!   </a></li>)
            })}

        </div>
    );
}

export default Films