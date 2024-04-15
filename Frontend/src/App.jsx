import { Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";

import PickedMovieCard from "./Components/PickedMovieCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MovieCard from "./Components/MovieCard";
// built
const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [randomMovieData, setRandomMovieData] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/popular_movies");
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        }
      }

      fetchMovies();
  }, []);

    useEffect(() => {
      const fetchRandomMovie = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:5000/random_movie");
          setRandomMovieData(response.data);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      };

      fetchRandomMovie();
    }, []);

  return (
      <body>
        <Header />
        {/* Hot Movies List */}
        <p className="text-center text-3xl font-roboto text-green-500 font-bold mt-10 mb-5 ml-20 decoration-solid ">
          Hot New Releases
        </p>
        <div className="flex justify-center items-center">
          {movieData.slice(0, 4).map((movie, index) => (
            <React.Fragment key={index}>
              <MovieCard movieData={movie} />
              <Spacer x={4} />
            </React.Fragment>
          ))}
        </div>

        {/* Random Movie Picker Search */}
        <div className=" items-center">
          <p className="text-center text-3xl font-roboto text-green-500 font-bold mt-10 mb-5 ml-20 decoration-solid ">
            Random Movie Picker
          </p>
          <PickedMovieCard randomMovieData={randomMovieData} />
        </div>
        <Footer className="mt-10" />
      </body>
  );
};

export default App;
