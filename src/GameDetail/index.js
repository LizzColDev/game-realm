import React from 'react';

function GameItem(props){
	return(
		<li>
			<span>C</span>
			<p>{props.text} </p>
			<span>X</span>
		</li>
	);
}
    
export { GameItem };
