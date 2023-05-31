import React from 'react';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

import { ListContainer } from '../ListContainer';
import { MenuList } from '../MenuList';

function NavHeader(){
	return(
		<><header>
			<nav>
				<NavTitleLogo className='nav-header'/>
				<NavList className='links-nav'>
					<MenuList/>
				</NavList>
				<ListContainer/>
				
			</nav>
		</header>

		</>
	);
}

export {NavHeader};