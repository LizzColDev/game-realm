import React from 'react';
import { MenuList } from '../MenuList';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

function NavHeader(){
	return(
		<><header>
			<nav>
				<NavTitleLogo className='nav-header'/>
				
				<NavList className='links-nav'>
					<MenuList/>
				</NavList>
			</nav>
		</header>

		</>
	);
}

export {NavHeader};