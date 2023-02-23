import React from 'react';
import './NavList.css';
import PropTypes from 'prop-types';

function NavList({className}){
	return(
		<>
			<ul className={className}>
				<li>
					<button  >Categories</button>
				</li>
				<li>
					<button >Games</button>
				</li>
				<li>
					<button >News</button>
				</li>
				<li>
					<button >Ranking</button>
				</li>
				<li>
					<button >Guides and Tricks</button>
				</li>
			</ul>
		</>
	);
}

NavList.propTypes = {
	className: PropTypes.string 
};
  
export {NavList};

