import React from 'react';
import './NavList.css';
import PropTypes from 'prop-types';


function NavList(props) {
	
	return(
		<>
			<ul className={props.className}>
				{props.loading && props.onLoading()}
				{props.children}
			</ul>
		</>
	);
}

NavList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	loading: PropTypes.string,
	onLoading: PropTypes.string,
};
  
export {NavList};
