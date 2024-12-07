import { Link, useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { IoMoon, IoSunny } from "react-icons/io5";
import StarRatings from "react-star-ratings";
// import "react-slideshow-image/dist/styles.css";
// import { Fade } from "react-slideshow-image";
import Hero from "../components/Hero";
// import HighestRated from "../components/HighestRated";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="dark:bg-black">
      <div className="w-10/12 mx-auto">
        <Hero></Hero>
        <div className="divider dark:divider-primary text-3xl my-12 dark:text-white  text-[#2140a9] font-bold">Highest Rated Game </div>
        <div className="grid w-10/12 mx-auto my-6 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((highestratedData) => (
            <div key={highestratedData._id}>
              <div className="">
                <div className="card overflow-hidden border-none dark:bg-white rounded-2xl backdrop-blur-md w-80 shadow-xl">
                  <figure className="px-7 pt-7">
                    <img
                      src={highestratedData.gameName}
                      alt="Shoes"
                      className="rounded-xl w-full h-[300px]"
                    />
                  </figure>
                  <div className="mt-5 flex h-[200px] flex-col items-center justify-between text-center">
                    <h2 className="text-purple-800">
                      {highestratedData.Ganres}
                    </h2>
                    <p className="card-title">{highestratedData.gameTitle}</p>
                    <p className="text-gray-500">{highestratedData.name}</p>
                    <div className="flex justify-between">
                      {highestratedData.rating && (
                        <StarRatings
                          rating={highestratedData.rating}
                          starRatedColor="#f57f25"
                          starDimension="18px"
                          starSpacing="1px"
                          numberOfStars={5}
                          name="rating"
                        />
                      )}
                    </div>
                    <div className="w-full">
                      <Link
                        to={`/review/${highestratedData._id}`}
                        className="btn text-white w-full border-none rounded-none bg-[#16234d]"
                      >
                        Explore Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
