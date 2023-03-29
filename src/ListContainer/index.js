import React from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../GameContext';
import { Link } from 'react-router-dom';


function ListContainer(props) {
	const { setOpenModal, setIsActive } = React.useContext(GameContext);

	const onClickButton = () => {
		setOpenModal(prevState => !prevState);
		setIsActive(prevState => !prevState);
	};
	return(
		<li>
			<Link
				id={props.id}
				name={props.name}
				onClick={onClickButton}
				to={props.route}
			>
				{props.genreName}
			</Link>
				
		</li>
	);
}

ListContainer.propTypes = {
	className: PropTypes.string,
	setOpenModal: PropTypes.func,
	id: PropTypes.number,
	name: PropTypes.string,
	genreName: PropTypes.string,
	route: PropTypes.string,

};
  
export {ListContainer};