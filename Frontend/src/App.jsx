import { Spacer } from "@nextui-org/react";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";

const App = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/popular_movies");
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (

      <div>
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
      </div>
  );
};

export default App;
