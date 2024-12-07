import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const HighestRated = ({ highestratedData }) => {

  return (
    <div className="">
      <div className="card overflow-hidden rounded-2xl backdrop-blur-md w-80 shadow-xl">
        <figure className="px-7 pt-7">
          <img
            src={gameName}
            alt="Shoes"
            className="rounded-xl w-full h-[300px]"
          />
        </figure>
        <div className="mt-5 flex h-[200px] flex-col items-center justify-between text-center">
          <h2 className="text-purple-800">{Ganres}</h2>
          <p className="card-title">{gameTitle}</p>
          <p className="text-gray-500">{name}</p>
          <div className="flex justify-between">
          {
                rating && ( <StarRatings
                    rating={rating}
                    starRatedColor="#f57f25"
                    starDimension="18px"
                    starSpacing="1px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
            </div>
          <div className="w-full">
            <Link to={`/review/${_id}`} className="btn text-white w-full border-none rounded-none bg-[#16234d]">
              Explore Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighestRated;
