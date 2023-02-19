import {useState} from 'react';

function GetApiKey(){
	const [ apiKey, setApiKey ] = useState('');

	if(!apiKey){
		const apiKeyInput = prompt('Digite su API_KEY:');
		setApiKey(apiKeyInput);
	}
	return apiKey;
}

export {GetApiKey};