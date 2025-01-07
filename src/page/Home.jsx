import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Hero from "../components/Hero";
import gamesbanner from "../assets/gamesbanner.jpg";
import TeamWork from "../components/TeamWork";
import { useCountUp } from "react-countup";
import React, { useEffect, useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { Fade } from "react-awesome-reveal";
import Title from "../components/shered/Title";
import Typewriter from 'typewriter-effect';
import AllReviews from "../components/Contacts";

const Home = () => {
  const data = useLoaderData();

  const teamworker = [
    {
      id: 1,
      photo: "https://i.ibb.co.com/HxCXpBc/john-doe.jpg",
      name: "John Doe",
      position: "FOUNDER",
      facebook: "https://www.facebook.com/theejohndoe/",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "2",
      photo: "https://i.ibb.co.com/BB9kLQp/images.jpg",
      name: "Jane Smith",
      position: "CO-FOUNDER",
      facebook: "https://www.facebook.com/smith.jane.385708",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "3",
      photo: "https://i.ibb.co.com/0n3tdpp/Alice-Johnson.png",
      name: "Alice Johnson",
      position: "FRONT END DEVELOPER",
      facebook: "https://www.facebook.com/profile.php?id=61564106585180",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "4",
      photo: "https://i.ibb.co.com/qN4j3QQ/Chris-Lee.jpg",
      name: "Chris Lee",
      position: "BACK END DEVELOPER",
      facebook: "https://www.facebook.com/ChrisLeeHawaii",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "5",
      photo: "https://i.ibb.co.com/k5XpKRT/Emily-Davis.jpg",
      name: "Emily Davis",
      position: "GRAPHIC DESIGNER",
      facebook: "https://www.facebook.com/profile.php?id=61568383882898",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "6",
      photo: "https://i.ibb.co.com/f0m4q3p/Michael-Brown.jpg",
      name: "Michael Brown",
      position: "UI UX DESIGNER",
      facebook: "https://www.facebook.com/DrMichaelBrown",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "7",
      photo: "https://i.ibb.co.com/P9vNrsz/Chris-Pratt.png",
      name: "Emily Davis",
      position: "GRAPHIC DESIGNER",
      facebook: "https://www.facebook.com/profile.php?id=61568383882898",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
    {
      id: "8",
      photo: "https://i.ibb.co.com/kqVzskx/Taylor-Jenkins-Reid.png",
      name: "Michael Brown",
      position: "UI UX DESIGNER",
      facebook: "https://www.facebook.com/DrMichaelBrown",
      linkdIn: "https://www.linkedin.com/in/john-doe-1a0127243/",
      youtube: "https://www.youtube.com/@ProgrammingHeroCommunity",
    },
  ];

  const [reviewData, setReviewData] = useState(9);

  useEffect(() => {
    fetch("https://chill-game-server-eight.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviewData(parseInt(data.length)));
  }, []);

  const countUpReviewRef = React.useRef(null);
  const countUpWishRef = React.useRef(null);

  const { start } = useCountUp({
    ref: countUpReviewRef,
    start: 0,
    end: { reviewData },
    delay: 1000,
    duration: 5,
  });
  const { review } = useCountUp({
    ref: countUpWishRef,
    start: { reviewData },
    end: 1234567,
    delay: 1000,
    duration: 5,
  });

  return (
    <div className="dark:bg-white bg-black">
      <div className="pt-28">
        <Hero></Hero>
        <div className="text-3xl my-12 dark:text-white  text-[#2140a9] font-bold">
          <Title title={"Featured Games"}></Title>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="">
            <div className="grid my-6 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data.map((highestratedData) => (
                <div
                  key={highestratedData._id}
                  className="w-full mx-auto space-y-3 rounded-xl overflow-hidden bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] dark:bg-white"
                >
                  <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                    <img
                      width={500}
                      height={200}
                      className=" object-cover"
                      src={highestratedData.gameName}
                      alt="card navigate ui"
                    />
                  </div>
                  <div className="space-y-2 px-4 dark:text-gray-600  *:text-white pb-4 font-semibold">
                    <div className="flex justify-between items-center">
                      <h6 className=" dark:text-gray-600 text-white text-2xl">
                        {highestratedData.Ganres}
                      </h6>
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
                    </div>
                    <p className="text-sm dark:text-gray-600  font-semibold text-gray-400 md:text-[16px]">
                      {highestratedData.gameTitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-[#8750f7]"></p>
                      <Link className="ml-3" to={`/review/${highestratedData._id}`}>
                        <p className="hover:bg-[#141119] hover:border hover:border-solid hover:border-[#8750f7] border-none text-white bg-[#633AA9] px-6 py-2 rounded-3xl shadow-lg font-semibold">
                          Explore Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>

        <div className="bg-opacity-20 dark:bg-opacity-20 bg-[#633aa9] object-fill mt-10 bg-cover">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={gamesbanner}
                className="max-w-sm sm:w-xl lg:max-w-xl  backdrop-opacity-100	 bg-opacity-20 rounded-lg shadow-2xl"
              />
              <div className="dark:*:text-[#633aa9] *:text-white">
                <h1 className="text-5xl font-bold">
                  <Typewriter
                    options={{
                      strings: ["Gamxo an unknown printer took galley type scrambled"],
                      autoStart: true,
                      loop: true,
                      delay: 150,
                    }}
                  />
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <p className="flex items-center">
                  <GrRadialSelected className="text-[#3157d5] mr-4" />
                  Modern Gaming Blogging{" "}
                </p>
                <p className="flex items-center">
                  <GrRadialSelected className="text-[#3157d5] mr-4" />
                  Smart Grid System{" "}
                </p>
                <p className="flex items-center">
                  <GrRadialSelected className="text-[#3157d5] mr-4" />
                  Clean Code{" "}
                </p>
                <p className="flex items-center">
                  <GrRadialSelected className="text-[#3157d5] mr-4" />
                  Business Way{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-banner py-12 rounded-t-2xl">
          <div className="w-10/12 mx-auto text-center">
            <Title title={"Meet Our Team"}></Title>
            <p className="mt-1 mb-12 text-gray-400 dark:text-gray-700">
              We talk a lot about hope helping and teamwork
            </p>
          </div>
          <div className="grid gap-7 w-10/12 mx-auto gap-y-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teamworker.map((team) => (
              <TeamWork key={team.id} team={team}></TeamWork>
            ))}
          </div>
        </div>
      </div>
        <div className="mt-4">
        <AllReviews></AllReviews>
        </div>
    </div>
  );
};

export default Home;
