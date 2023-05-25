import axios from 'axios';
import { NEWS_VIDEOGAMES, RAWG_API_KEY } from '../../../API_KEY/API_KEY';

const URL_RAWG = 'https://api.rawg.io/api/';
const URL_NEWS_VIDEOGAMES = 'https://videogames-news2.p.rapidapi.com/videogames_news/';

const API_RAWG = axios.create({
	baseURL: URL_RAWG,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
	params: {
		key: RAWG_API_KEY,	
	}
});


const API_NEWS_VIDEOGAMES = axios.create({
	baseURL: URL_NEWS_VIDEOGAMES,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
		'X-RapidAPI-Key': NEWS_VIDEOGAMES
	},
	params: {
		
	}
});

export {API_RAWG, API_NEWS_VIDEOGAMES};