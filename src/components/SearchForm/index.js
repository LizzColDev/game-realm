import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { GameContext } from '../../App/GameContext';
import './SearchForm.css';
import { useNavigate  } from 'react-router-dom';

function SearchForm(){
	const navigate = useNavigate ();
	const {setQuery} = useContext(GameContext);
	const [searchTerm, setSearchTerm] = React.useState('');

	let inputValue;
	const valueInput = (e) => {
		inputValue = e.target.value;
		setSearchTerm(inputValue);
	};
	const handleSearchClick  = (e) => {

		e.preventDefault();
		setQuery(searchTerm);
		navigate('/results');
	};

	return(
		<form className='form-searchContain' onSubmit={handleSearchClick}>
			<input 
				className='inputSearchGame' 
				value={searchTerm} 
				placeholder='Find your Game' 
				onChange={valueInput} />
			{/* <Link to={'/results'}> */}
			<button 
				className='btn btn-search' 
				type="submit"
			>🔍</button>
			{/* </Link> */}

		</form>
	);
}

export {SearchForm};