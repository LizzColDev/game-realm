import React from 'react';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

function NavHeader(){
	return(
		<>
			<nav>
				<NavTitleLogo className='nav-header'/>
				<NavList className='links-nav'  />
			</nav>
		</>
	);
}

export {NavHeader};