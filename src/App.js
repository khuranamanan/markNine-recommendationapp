import "./styles.css";
import { useState } from "react";

const moviedb = {
  "Comic Book Movies": [
    {
      name: "Avengers Endgame",
      desc:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
      rating: "5/5"
    },
    {
      name: "Avengers Infinity War",
      desc:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
      rating: "4.8/5"
    },
    {
      name: "The Batman",
      desc:
        "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.",
      rating: "4.8/5"
    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      desc:
        "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
      rating: "4.5/5"
    }
  ],
  "Musical Movies": [
    {
      name: "tick, tick...BOOM!",
      desc:
        "Based on the autobiographical musical by playwright Jonathan Larson. It's the story of an aspiring composer in New York City who is worried he made the wrong career choice, whilst navigating the pressures of love and friendship.",
      rating: "4.9/5"
    },
    {
      name: "The Greatest Showman",
      desc:
        "P T Barnum becomes a worldwide sensation in the show business. His imagination and innovative ideas take him to the top of his game.",
      rating: "4.8/5"
    },
    {
      name: "La La Land",
      desc:
        "When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.",
      rating: "4.8/5"
    },
    {
      name: "Encanto",
      desc:
        "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.",
      rating: "4.6/5"
    }
  ],
  "Animated Movies": [
    {
      name: "Inside Out",
      desc:
        "Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.",
      rating: "5/5"
    },
    {
      name: "Zootopia",
      desc:
        "When Judy Hopps, a rookie officer in the Zootopia Police Department, sniffs out a sinister plot, she enlists the help of a con artist to solve the case in order to prove her abilities to Chief Bogo.",
      rating: "4.9/5"
    },
    {
      name: "Encanto",
      desc:
        "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.",
      rating: "4.6/5"
    },
    {
      name: "Klaus",
      desc:
        "Jesper, a selfish postman, is forced to relocate to Smeerensburg by his father. However, he joins hands with a reclusive toymaker, Klaus, to spread joy in the dark and dreary town.",
      rating: "4.5/5"
    }
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
              <div className="mdesc">{movie.desc}</div>
              <div className="mrating">Rating: {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
