<h1 align="center">
  Game World
</h1>

<p align="center">
  Welcome to Game World, a professional and visually appealing web application that provides comprehensive information about games, including rankings, upcoming games, popular games, news, and more. This application is built using React and leverages various powerful libraries and frameworks to enhance its functionality and user experience.
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Libraries and Frameworks Used](#libraries-and-frameworks-used)
- [Functionality](#functionality)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- View rankings of games based on user ratings
- Explore upcoming games and their details
- Discover popular games and their information
- Read the latest news articles related to games
- Search for specific games by name or genre

## Installation

Before running the Game World web application, you need to obtain API keys for the following APIs:

- [RAWG API](https://rawg.io/apidocs): RAWG is a video game database API that provides information about games. You'll need to sign up for an account and obtain an API key.
- [News API](https://newsapi.org/): News API allows you to fetch news articles related to games. You'll need to sign up for an account and obtain an API key.

Once you have obtained the API keys, you can proceed with the following steps:

1. Create a new folder called `API_KEY` in the root directory of the project.
2. Inside the `API_KEY` folder, create a new file named `API_KEY.js`.
3. Open the `API_KEY.js` file and add the following lines:


  ```javascript
const RAWG_API_KEY=YOUR_RAWG_API_KEY;
const NEWS_VIDEOGAMES=YOUR_NEWS_API_KEY;

export {RAWG_API_KEY, NEWS_VIDEOGAMES};
   ```
Replace 'YOUR_RAWG_API_KEY' with your actual RAWG API key and 'YOUR_NEWS_API_KEY' with your actual News API key.

Save the API_KEY.js file.
Once you have completed the above steps, you can proceed with running the application as mentioned in the previous instructions.

Note: Make sure to keep your API keys confidential and do not share them publicly.

## Usage

Once the application is running, you can use the following features:

- **Navbar**: The top navigation bar provides links to different sections of the application, including ranking games, upcoming games, popular games, news, and genres.
- **Search**: You can enter a search query in the search bar and press Enter or click the search button to find games matching your query.
- **Ranking Games**: Clicking on the "Ranking Games" link in the navbar will display a page showing the top-ranked games.
- **Upcoming Games**: Clicking on the "Upcoming Games" link in the navbar will display a page showing the upcoming games.
- **Popular Games**: Clicking on the "Popular Games" link in the navbar will display a page showing the most popular games.
- **News**: Clicking on the "News" link in the navbar will display a page showing the latest news related to games.
- **Genres**: Hovering over the "Genres" link in the navbar will show a dropdown menu with different game genres. Clicking on a genre will display a page showing games belonging to that genre.
- **Game Details**: Clicking on a game card will navigate to a page showing detailed information about the selected game.

## Libraries and Frameworks Used

The Game World web application utilizes the following libraries and frameworks:

- React: A powerful JavaScript library for building user interfaces efficiently.
- React Router: A routing library for single-page applications in React, enabling seamless navigation between different pages.
- React Bootstrap:  A library of reusable UI components for React, providing a responsive and aesthetically pleasing design.
- Axios: A popular promise-based HTTP client for making API requests, simplifying data fetching from the server.
- PropTypes: A runtime type-checking library for React props, ensuring the correct usage of component properties.
- React Query: A data fetching library for React applications, providing a simple and efficient way to manage API data.

## Functionality

The Game World web application offers the following functionality:

- Fetching data from the RAWG API to display rankings, upcoming games, popular games, and game details.
- Fetching news articles using the News API and presenting them on the news page.
- Allowing users to search for specific games by name or genre.
- Utilizing React Router for seamless navigation between different pages.

## Limitations

The current version of the Game World web application has the following limitations:

- Limited search functionality: The search feature only searches for games based on a query and does not provide advanced filtering options.
- Limited data: The application relies on an external API for game data, so the available games and information may be subject to the API's limitations.

## Future Improvements

To enhance the Game World web application, the following improvements can be considered:

- Implement pagination or infinite scrolling to handle large lists of games more efficiently.
- Add user authentication and personalized features such as saving favorite games or creating user profiles.
- Improve the search functionality by adding advanced filtering options such as sorting, genre filtering, and platform filtering.
- Enhance the user interface and overall design to provide a more visually appealing and intuitive experience.
- Implement caching or data persistence to reduce reliance on external API calls and improve performance.

## Contributing

Contributions to the Game World web application are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

The Game World web application is open source and released under the [MIT License](LICENSE).
 
<p align="center">
  Made with ❤️ by LizzColDev
</p>
