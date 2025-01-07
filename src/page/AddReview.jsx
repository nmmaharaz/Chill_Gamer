import { useContext, useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import Title from "../components/shered/Title";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [ratingCount, setRatingCount] = useState(1);
  const [passingYear, setPassingYear] = useState([]);
  const [ganresData, setGanresData] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target; // Destructuring value
    setPassingYear(value);
  };
  const handleGenres = (event) => {
    const { value } = event.target; // Destructuring value
    setGanresData(value);
  };

  const handleRatingIncrease = () => {
    setRatingCount(ratingCount + 0.5);
    return;
  };

  const handleRatingdecrease = () => {
    setRatingCount(ratingCount - 0.5);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameName = e.target.gameName.value;
    const gameTitle = e.target.gameTitle.value;
    const description = e.target.description.value;
    const rating = ratingCount;
    const passingyear = passingYear;
    const Ganres = ganresData;
    const email = e.target.email.value;
    const name = e.target.name.value;

    const addReview = {
      gameName,
      gameTitle,
      description,
      rating,
      passingyear,
      Ganres,
      email,
      name,
    };

    fetch("https://chill-game-server-eight.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json)
      .then(
        (data) => console.log(data),
        Swal.fire({
          title: "Sueccess!",
          text: "Review added successfully",
          icon: "success",
          confirmButtonText: "Close",
        })
      );
  };

  return (
    <div className="py-32 dark:bg-white bg-black">
      <div className="w-8/12 mx-auto">
        <div className="pb-5">
         <Title title={"Add Review"}></Title>
        </div>
        <div className="card mx-auto w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="dark:bg-opacity-20 dark:bg-[#633aa9] bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] p-8 rounded-2xl card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-black text-white">Game Cover URL</span>
              </label>
              <input
                type="text"
                placeholder="game URL"
                name="gameName"
                className=" dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-black text-white">Game Title</span>
              </label>
              <input
                type="text"
                placeholder="game title"
                name="gameTitle"
                className=" dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input input-bordered"
                required
              />
            </div>

            <div className="sm:flex items-center">
              <div className="form-control mr-0 sm:mr-5 sm:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-black text-white">Review Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  className=" dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex flex-col sm:w-1/2">
                <label className="label dark:text-black text-white" htmlFor="">
                  Rating
                </label>
                <div
                  className="flex dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white  justify-between items-center input input-bordered w-full"
                  name="rating"
                >
                  <div id="countRating">{ratingCount}</div>
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={handleRatingIncrease}
                      disabled={ratingCount == 5}
                    >
                      <FaAngleUp />
                    </button>
                    <button
                      type="button"
                      onClick={handleRatingdecrease}
                      disabled={ratingCount == 1}
                    >
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" sm:flex items-center">
              <div className="form-control mr-0 sm:mr-5 sm:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-black text-white">Publishing Year</span>
                </label>
                <select
                  onChange={handleChange}
                  className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input-bordered w-full"
                  name="passing"
                  id=""
                >
                  <option value="">Select</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              <div className="flex sm:w-1/2 flex-col">
                <label className="label dark:text-black text-white" htmlFor="">
                  Genres
                </label>
                <select
                  onChange={handleGenres}
                  data-dropdown-toggle="dropdownId"
                  className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white flex input-bordered w-full"
                  aria-labelledby="dropdownDefaultButton"
                  name="genres"
                  id=""
                >
                  <option value="">Select</option>
                  <option value="Action">Action</option>
                  <option value="Survival game">Survival game</option>
                  <option value="Shooter game">Shooter game</option>
                  <option value="Adventure games">Adventure games</option>
                  <option value="First-person shooter">
                    First-person shooter
                  </option>
                  <option value="Strategy game">Strategy game</option>
                  <option value="Massively multiplayer online game">
                    Massively multiplayer online game
                  </option>
                  <option value="Rhythm game">Rhythm game</option>
                  <option value="Simulation video game">
                    Simulation video game
                  </option>
                  <option value="Fighting">Fighting</option>
                  <option value="ARPG">ARPG</option>
                </select>
              </div>
            </div>
            <div className="sm:flex">
              <div className="flex sm:w-1/2 flex-col mr-0 sm:mr-5">
                <label className="label dark:text-black text-white" htmlFor="">
                  Email
                </label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  name="email"
                  placeholder="game name"
                  className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input-bordered w-full"
                />
              </div>
              <div className="flex flex-auto sm:w-1/2 flex-col">
                <label className="label dark:text-black text-white" htmlFor="">
                  Name
                </label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white input-bordered w-full "
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="dark:bg-opacity-60 cursor-pointer dark:border-base-200 bg-[#7539d8] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#b097e2] text-white font-semibold px-6 py-2 rounded-3xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
