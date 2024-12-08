import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Hero from "../components/Hero";
import gamesbanner from "../assets/gamesbanner.jpg"
import TeamWork from "../components/TeamWork";
import { useCountUp } from "react-countup";
import React, { useEffect, useState } from "react";
import { GrRadialSelected } from "react-icons/gr";

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
  console.log(reviewData);

  useEffect(() => {
    fetch("http://localhost:5000/review")
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
    <div className="dark:bg-black">
      <div className="">
        <Hero></Hero>
        <div className="divider dark:divider-primary text-3xl my-12 dark:text-white  text-[#2140a9] font-bold">
          Highest Rated Game
        </div>
        <div className="grid w-10/12 mx-auto my-6 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((highestratedData) => (
            <div key={highestratedData._id}>
              <div className="">
                <div className="card overflow-hidden glass bg-white dark:bg-gray-200 border-none rounded-2xl backdrop-blur-md w-80 shadow-xl">
                  <figure className="px-7 pt-7">
                    <img
                      src={highestratedData.gameName}
                      alt="Shoes"
                      className="rounded-xl w-full h-[300px]"
                    />
                  </figure>
                  <div className="mt-5 flex h-[200px] flex-col items-center justify-between text-center">
                    <h2 className="card-title text-purple-800">
                      {highestratedData.Ganres}
                    </h2>
                    <p className="">{highestratedData.gameTitle}</p>
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

        <div className="dark:dark:bg-[url('/img/hero-pattern.svg')] bg-gamesbanner object-fill mt-10 bg-cover">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={gamesbanner}
                className="max-w-2xl backdrop-opacity-100	 bg-opacity-20 rounded-lg shadow-2xl"
              />
              <div className="*:text-white">
                <h1 className="text-5xl font-bold">Gamxo an unknown printer took galley type scrambled.</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <p className="flex items-center"><GrRadialSelected className="text-[#3157d5] mr-4"/> 
                Modern Gaming Blogging </p>
                <p className="flex items-center"><GrRadialSelected className="text-[#3157d5] mr-4"/> 
                Smart Grid System </p>
                <p className="flex items-center"><GrRadialSelected className="text-[#3157d5] mr-4"/> 
                Clean Code </p>
                <p className="flex items-center"><GrRadialSelected className="text-[#3157d5] mr-4"/> 
                Business Way </p>
              </div>
            </div>
          </div>
        </div>

        {/* review Count */}

        <div>
          <div className="w-10/12 flex justify-between mx-auto shadow">
            <div className="stat">
              <div className="stat-title text-center">Genres</div>
              <div className="stat-value text-center">11</div>
            </div>
            <div className="stat">
              <div className="stat-title text-center">Total Rivew</div>
              <div
                ref={countUpReviewRef}
                onClick={start}
                className="stat-value text-center"
              >
                Start
              </div>
            </div>
            <div className="stat">
              <div className="stat-title text-center">Total Wishlist</div>
              <div
                ref={countUpWishRef}
                onClick={review}
                className="stat-value text-center"
              >
                11
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-[url('/img/hero-pattern.svg')] bg-banner py-12 rounded-t-2xl">
          <div className="w-10/12 mx-auto text-center">
            <div className="divider dark:divider-primary text-3xl -12 dark:text-white  text-[#2140a9] font-bold">
              Meet Our Team
            </div>
            <p className="mt-4 mb-12 dark:text-white">
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
    </div>
  );
};

export default Home;
