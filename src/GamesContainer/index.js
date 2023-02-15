import React from 'react';

function GamesContainer(props){
	return(
		<section>
			<ul>
				{props.children}
			</ul>
		</section>
	);
}

export { GamesContainer};
