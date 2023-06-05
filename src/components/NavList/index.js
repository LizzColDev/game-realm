import React from 'react';
import './NavList.css';
import PropTypes from 'prop-types';


function NavList({ selectedOption, setSelectedOption, children, className }) {


	return(
		<>
			<ul className={className}>
				{React.Children.map(children, child =>
					React.cloneElement(child, { selectedOption, setSelectedOption })
				)}
			</ul>
		</>
	);
}

NavList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	selectedOption: PropTypes.string,
	setSelectedOption: PropTypes.func,
};
  
export {NavList};
