import React from 'react';
import './SearchForm.css';

function SearchForm(){
	return(
		<form className='form-searchContain'>
			<input className='inputSearchGame' placeholder='Find your Game' />
			<button className='btn btn-search'>🔍</button>
		</form>
	);
}

export {SearchForm};