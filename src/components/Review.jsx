import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  const {
    _id,
    gameName,
    gameTitle,
    description,
    rating,
    passingyear,
    Ganres,
    email,
    name,
  } = review;
  return (
    <div>
      <div
        key={_id}
        className="w-full mx-auto space-y-3 rounded-xl overflow-hidden bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] dark:bg-white"
      >
        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
          <img
            width={500}
            height={200}
            className=" object-cover"
            src={gameName}
            alt="card navigate ui"
          />
        </div>
        <div className="space-y-2 px-4 dark:text-gray-600  *:text-white pb-4 font-semibold">
          <div className="flex justify-between items-center">
            <h6 className=" dark:text-gray-600 text-white text-2xl">
              {Ganres}
            </h6>
            <div className="flex justify-between">
              {rating && (
                <StarRatings
                  rating={rating}
                  starRatedColor="#f57f25"
                  starDimension="18px"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                />
              )}
            </div>
          </div>
          <p className="text-sm dark:text-gray-600  font-semibold text-gray-400 md:text-[16px]">
            {gameTitle.substring(0,40)}...
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-[#8750f7]"></p>
            <Link className="ml-3" to={`/review/${_id}`}>
              <p className="hover:bg-[#141119] hover:border hover:border-solid hover:border-[#8750f7] border-none text-white bg-[#633AA9] px-6 py-2 rounded-3xl shadow-lg font-semibold">
                Explore Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
