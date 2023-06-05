import React, { useContext } from 'react';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

import { ListContainer } from '../ListContainer';
import { MenuList } from '../MenuList';
import { GameContext } from '../../App/GameContext';

function NavHeader(){
	const {  selectedOption, setSelectedOption } = useContext(GameContext);

	return(
		<><header>
			<nav>
				<NavTitleLogo className='nav-header'/>
				<NavList className='links-nav' selectedOption={selectedOption} setSelectedOption={setSelectedOption}>
					<MenuList />
				</NavList>
				<ListContainer selectedOption={selectedOption} />
				
			</nav>
		</header>

		</>
	);
}

export {NavHeader};