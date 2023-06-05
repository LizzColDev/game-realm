import React from 'react';
import { OptionSelectedMenu } from '../OptionSelectedMenu';
import PropTypes from 'prop-types';


function ListContainer({ selectedOption }) {

	return(
		<>		
			{ selectedOption  && <OptionSelectedMenu selectedOption={selectedOption} />}				
		</>
	);
}

ListContainer.propTypes = {
	selectedOption: PropTypes.string,
	setSelectedOption: PropTypes.func,
};
export {ListContainer};