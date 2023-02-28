import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './GenreCard.css';
import { GameContext } from '../GameContext';
import { Link } from 'react-router-dom';

function GenreCard(props){
	const {goPages} = useContext(GameContext);



	return(
		<Link to='/genres' onClick={goPages}>
			<button type='button' key={props.id}  className='genre-contain'>
				{props.genreName}
			</button>
		</Link>


		

	);
}
GenreCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	genreName: PropTypes.string,
	children: PropTypes.node,
	genre: PropTypes.string
};
export {GenreCard};