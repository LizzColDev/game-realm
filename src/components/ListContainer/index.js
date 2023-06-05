import React from 'react';
import { OptionSelectedMenu } from '../OptionSelectedMenu';
import PropTypes from 'prop-types';


function ListContainer({ selectedOption, setSelectedOption }) {
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	  };

	return(
		<>		
			{ selectedOption  && <OptionSelectedMenu selectedOption={selectedOption} onClick={() => handleOptionSelect('genres')} />}				
		</>
	);
}

ListContainer.propTypes = {
	selectedOption: PropTypes.string,
	setSelectedOption: PropTypes.func,
};
export {ListContainer};