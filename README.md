# Netflix Clone

```
A fully responsive Netflix Clone project built using React.js, styled-components using Bootstrap and Vite, mimicking the look and feel of the popular streaming platform.
This project fetches movie data dynamically from TMDb (The Movie Database) API and features a clean UI with dynamic rows, play movie trailers from You Tube, and more.
```

## Features

```
1 - Responsive Design: It adapts seamlessly to various screen sizes using bootstrap, ensuring a user-friendly experience.
2 - Dynamic Rows: Display movies and TV shows in categorized rows, similar to Netflix.
3 - Click Effect: clicking on dropdown arrow drops account setting lists.
3 - Hover Effect: Enlarges the movie poster on hover, providing a dynamic interaction.
4 - Video Trailer Playback: Clicking movie posters plays a video trailer and clicking stop button stops the trailer video.
5 - Smooth Scrolling: Scroll through rows using arrow navigation.
6 - TMDb API Integration: Fetches trending, top-rated, and genre-specific movies and TV shows in real-time.
```

## Tech Stack

```
1 - React.js: For building the user interface.
2 - Vite: For fast build and development environment.
3 - TMDb API: For fetching real-time movie and TV show data.
4 - Bootstrap: For component-level styling.
5 - Axios: For making HTTP requests to the TMDb API.
6 - React YouTube: For embedding movie trailers.
```

## File Structure

```
Netflix-Clone
├── public/                              # public code for the app
│   ├── robots.txt                       # Disallows search engines from indexing
├── src/                                 # Source code for the app
│   ├── Components/                      # Reusable components
│   │   ├── Banner                       # Banner component for displaying random movies
│   │   │   ├── Banner.css               # Banner component styles
│   │   │   ├── Banner.jsx               # Banner component
|   |   ├── Footer                       # Footer component folder
│   │   │   ├── Footer.css               # Footer component styles
│   │   │   ├── Footer.jsx               # Footer component
│   │   ├── Header                       # Navigation bar component
│   │   │   ├── Header.css               # Header component styles
│   │   │   ├── Header.jsx               # Header component
│   │   ├── Rows                         # Rows component for displaying movies
│   │   │   ├── Row                      # Single row component folder
│   │   │   │   ├── Arrow.jsx            # Function for horizontal scrolling
│   │   │   │   ├── Row.jsx              # Single row component
│   │   │   ├── Rows.css                 # Rows component styles
│   │   │   ├── Rows.jsx                 # Rows component
│   ├── assets/Images                    # Images
│   ├── utils/                           # Helper functions
│   │   ├──axios.js                      # Axios instance for API calls
│   │   ├──requests.js                   # API requests configuration
│   ├── App.css                          # Global styles
│   ├── App.jsx                          # React DOM rendering entry point
│   └── main.jsx                         # Main entry point for the React app
├── .gitignore                           # Files to ignore in Git
├── README.md                            # Project README file
├── eslint.config.js                     # ESLint configuration file
├── index.html                           # Main HTML file
├── package-lock.json                    # Auto-generated lock file for npm dependencies
├── package.json                         # Project metadata and dependencies
├── vite.config.js                       # Vite configuration file
```

## Installation

```
1. Clone the repository:  
   `git clone https://github.com/henokyohanes/Netflix-Clone.git`
2. Navigate to the project directory:  
   `cd Netflix-Clone`
3. Install the dependencies:  
   `npm install`
```

## License

```
This project is a clone of Netflix Website for personal educational use only.
```