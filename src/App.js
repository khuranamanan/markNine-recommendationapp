import "./styles.css";
import { useState } from "react";

const moviedb = {
  "Comic Book Movies": [
    { name: "Avengers Endgame", rating: "5/5" },
    { name: "Avengers Infinity War", rating: "4.8/5" },
    { name: "The Batman", rating: "4.8/5" },
    { name: "Spider-Man: Into the Spider-Verse", rating: "4.5/5" }
  ],
  "Musical Movies": [
    { name: "tick, tick...BOOM!", rating: "4.9/5" },
    { name: "The Greatest Showman", rating: "4.8/5" },
    { name: "La La Land", rating: "4.8/5" },
    { name: "Encanto", rating: "4.6/5" }
  ],
  "Animated Movies": [
    { name: "Inside Out", rating: "5/5" },
    { name: "Zootopia", rating: "4.9/5" },
    { name: "Encanto", rating: "4.6/5" },
    { name: "Klaus", rating: "4.5/5" }
  ]
};

export default function App() {
  const genreArray = Object.keys(moviedb);

  const [selectedGenre, setGenre] = useState("Comic Book Movies");

  function buttonClickHandler(movieGenre) {
    setGenre(movieGenre);
  }

  return (
    <div className="App">
      <h1>🎬 goodmovie</h1>
      <h2>Checkout my favorite movies. Select a genre to get started</h2>

      <div>
        {genreArray.map((genre) => (
          <button
            className="btn"
            key={genre}
            onClick={() => buttonClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {moviedb[selectedGenre].map((movie) => (
            <li className="listitem" key={movie.name}>
              <div className="movie">{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
