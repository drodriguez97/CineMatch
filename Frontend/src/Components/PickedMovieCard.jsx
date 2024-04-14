import { Card, CardHeader, CardBody, Image, Button, Select, SelectItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState, useEffect } from "react";

import genreData from "../assets/genreData.jsx";
import PropTypes from 'prop-types';
import axios from "axios";

const PickedMovieCard = ({ randomMovieData }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [years, setYears] = useState([]);
  const [randomMovie, setRandomMovie] = useState(randomMovieData);

  const generateYearList = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = currentYear; year >= 1930; year--) {
      yearOptions.push({ label: year.toString(), value: year });
    }

    setYears(yearOptions);
  };

  useEffect(() => {
    generateYearList();
  }, []);

  useEffect(() => {
    setRandomMovie(randomMovieData);
  }, [randomMovieData]);

  const handleGenre = (event) => {
    const { value } = event.target;
    setGenre(value);
  }

  const handleYear = (event) => {
    const { value } = event.target;
    setYear(value);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/random_movie`, {
        params: {
          genre_id: genre,
          year: year
        }
      });
      const newRandomMovie = response.data;
      setRandomMovie(newRandomMovie);
    } catch (error) {
      console.error("Error fetching random movie data:", error);
    }
  }

  if (!randomMovie) {
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-center items-center space-x-6">
        <Select
          label="Genre"
          placeholder="Select a genre"
          value={genre}
          onChange={(value) => handleGenre(value)}
          className="min-w-[200px]"
        >
          {genreData.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Year"
          placeholder="Select a year"
          value={year}
          onChange={handleYear}
          className="min-w-[200px]"
        >
          {years.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Button className="font-roboto size-24 mt-4 bg-green-500 text-white" onClick={handleSearch}>Search</Button>
      </div>

      <div className="mt-8">
        <Card className="py-8 w-[400px] max-h-[600px] mb-20">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-large uppercase font-bold font-roboto  text-green-500">{randomMovie.title}</p>
            <small className="text-default-500">{randomMovie.genre_id}</small>
          </CardHeader>
          <CardBody className="overflow-visible flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={`//image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
              width={270}
            />
            <Popover placement="top">
              <PopoverTrigger>
                <Button className='font-roboto size-32 mt-4 bg-green-500 text-white'>Movie Overview</Button>
              </PopoverTrigger>
              <PopoverContent className='w-[240px]'>
                <div className="px-1 py-2 w-full">
                  <div className="text-medium font-bold"></div>
                  <div className="text-medium font-roboto">{randomMovie.overview}</div>
                </div>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

PickedMovieCard.propTypes = {
  randomMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default PickedMovieCard;
