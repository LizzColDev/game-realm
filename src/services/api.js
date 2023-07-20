/* eslint-disable no-undef */
import axios from 'axios';

const URL_RAWG = process.env.REACT_APP_URL_RAWG;
const apiKeyRawG = process.env.REACT_APP_RAWG_API_KEY;

const URL_NEWS_VIDEOGAMES = process.env.REACT_APP_URL_NEWS_VIDEOGAMES;
const apiKeyNewsVG = process.env.REACT_APP_NEWS_VIDEOGAMES;

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
	params: {
		q: 'video games',
	},
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
		'X-RapidAPI-Key': apiKeyNewsVG 
	}

});

export {API_RAWG, API_NEWS_VIDEOGAMES};