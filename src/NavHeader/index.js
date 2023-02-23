import React from 'react';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

function NavHeader(){
	return(
		<>
			<nav>
				<div className="nav-center">
					<NavTitleLogo className='nav-header'/>
					<NavList className='links-nav'/>
				</div>
			</nav>
		</>
	);
}

export {NavHeader};