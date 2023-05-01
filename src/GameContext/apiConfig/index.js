import axios from 'axios';
import {  NEWS_API_KEY, RAWG_API_KEY } from '../../API_KEY/API_KEY';

const URL_RAWG = 'https://api.rawg.io/api/';
const URL_NEWS_GAMES = 'https://newsapi.org/v2/';

const API_RAWG = axios.create({
	baseURL: URL_RAWG,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
	params: {
		key: RAWG_API_KEY,	
	}
});


const API_NEWS_GAMES = axios.create({
	baseURL: URL_NEWS_GAMES,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
	params: {
		apiKey: NEWS_API_KEY
	}
});

export {API_RAWG, API_NEWS_GAMES};