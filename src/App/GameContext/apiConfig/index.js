/* eslint-disable no-undef */
import axios from 'axios';

const URL_RAWG = secrets.env.REACT_APP_URL_RAWG;
const apiKeyRawG = secrets.env.REACT_APP_RAWG_API_KEY;

const URL_NEWS_VIDEOGAMES = secrets.env.REACT_APP_URL_NEWS_VIDEOGAMES;
const apiKeyNewsVG = secrets.env.REACT_APP_NEWS_VIDEOGAMES;

const API_RAWG = axios.create({
	baseURL: URL_RAWG,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
	params: {
		key: apiKeyRawG,	
	}
});


const API_NEWS_VIDEOGAMES = axios.create({
	baseURL: URL_NEWS_VIDEOGAMES,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
		'X-RapidAPI-Key': apiKeyNewsVG 
	},
	params: {
		
	}
});

export {API_RAWG, API_NEWS_VIDEOGAMES};