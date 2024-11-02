import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // Axios instance for making API requests
import requests from "../../utils/requests"; // API requests configuration
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import "./Banner.css";

const Banner = () => {

  const [movie, setMovie] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  // useEffect to fetch a random Netflix original movie when the component loads
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  // Function to truncate long movie descriptions
  const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + "..." : str;

  const opts = { height: "900vw", width: "100%", playerVars: { autoplay: 1 } };

  // Function to handle play button click and display the trailer
  const handleclick = (movie) => {
    if (trailerUrl) {
      settrailerUrl(""); // Close the trailer if it's already open
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // Extract YouTube video ID
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      settrailerUrl("7VXOHmaTd7g");
    }
  };

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}
      >
        <div className="banner-fadeTop"></div>
        {/* If no trailer is playing, show movie info and buttons */}
        {!trailerUrl && (
          <div className="banner-contents">
            <h1 className="banner-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h1 className="banner-description">
              {truncate(movie?.overview, 200)}
            </h1>
            <div className="banner-buttons">
              <button
                className="banner-button"
                onClick={() => handleclick(movie)}
              >
                <PlayArrowIcon fontSize="large" /> Play
              </button>
              <button className="banner-button"> More Info </button>
            </div>
          </div>
        )}
        <div className="banner-fadeBottom"></div>
      </div>
      {/* Display YouTube trailer if trailerUrl is set */}
      {trailerUrl && (
        <div className="banner-trailer-container">
          <div className="close-button" onClick={() => settrailerUrl("")}>
            <CloseIcon fontSize="large" />
            Close
          </div>
          <div className="banner-trailer">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </>
  );
}

export default Banner
