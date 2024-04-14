import PropTypes from 'prop-types';
import {Popover, Button, PopoverTrigger, PopoverContent, Card, CardHeader, CardBody, Image} from "@nextui-org/react";



const MovieCard = ({ movieData }) => {

  if (!movieData) {
    return null;
        }

  return (
    <div>
      {/* Movie card that will be populated using TMDb API */}
      <Card className="py-8 w-[400px] max-h-[600px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-large uppercase font-bold font-roboto  text-green-500">{movieData.title}</p>
          <small className="text-default-500">{movieData.genre_id}</small>
        </CardHeader>
        <CardBody className="overflow-visible flex justify-center items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`//image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            width={270}
          />
          <Popover placement="top">
          <PopoverTrigger>
            <Button className=' font-roboto size-32 mt-4 bg-green-500 text-white ' >Movie Overview</Button>
          </PopoverTrigger>
          <PopoverContent className=' w-[240px]'>
            <div className="px-1 py-2 w-full">
              <div className="text-medium font-bold"></div>
              <div className="text-medium font-roboto">{movieData.overview}</div>
            </div>
          </PopoverContent>
        </Popover>
        </CardBody>
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genre_id: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  }),
};


export default MovieCard;

