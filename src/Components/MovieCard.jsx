/* eslint-disable no-unused-vars */
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useState } from "react";

const MovieCard = () => {
  const [movieTitle, setMovieTitle] = useState(null);
  const [rating, setRating] = useState(null)


  return (
    <div>
      {/* Movie card that will be populated using TMDb API */}
      <Card className="py-6 max-w-[300px] max-h-[300px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-large uppercase font-bold">Movie Title</p>
          <small className="text-default-500">Rating</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default MovieCard;

