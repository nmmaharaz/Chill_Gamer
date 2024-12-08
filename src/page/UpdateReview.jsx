import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
    const data = useLoaderData()
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
      } = data;
    const [ratingCount, setRatingCount] = useState(rating);
  const [passingYear, setPassingYear] = useState(passingyear)
  const [ganresData, setGanresData] = useState([Ganres])

  const handleChange = (event) => {
    const { value } = event.target; // Destructuring value
    setPassingYear(value);
  }
  const handleGenres = (event) => {
    const { value } = event.target; // Destructuring value
    setGanresData(value);
  }


  const handleRatingIncrease = () => {
    setRatingCount(ratingCount + 1);
    return
  };

  const handleRatingdecrease = () => {
    setRatingCount(ratingCount - 1);
    return
  };
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    const gameName = e.target.gameName.value;
    const gameTitle = e.target.gameTitle.value;
    const description = e.target.description.value;
    const rating = ratingCount 
    const passingyear = passingYear
    const Ganres = ganresData
    const email = e.target.email.value;
    const name = e.target.name.value;

    const addReview = {_id:_id, gameName:gameName, gameTitle:gameTitle, description:description, rating:rating, passingyear:passingyear, Ganres:Ganres, email:email, name:name,}

    fetch(`http://localhost:5000/review/${_id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addReview)
    })
    .then(res=>res.json)
    .then(data=>{
      console.log(data)
      Swal.fire({
        title: 'Sueccess!',
        text: 'Review added successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    },
    
   )
  }
    return (
        <div>
              <div className="my-10">
      <div className="w-8/12 mx-auto">

      <div className="card mx-auto bg-blue-50 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Game Cover URL</span>
            </label>
            <input
              type="text"
              defaultValue={gameName}
              placeholder="game URL"
              name="gameName"
              className="input input-bordered"
              required
            />
          </div> 
        <div className="form-control">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <input
              type="text"
              defaultValue={gameTitle}
              placeholder="game title"
              name="gameTitle"
              className="input input-bordered"
              required
            />
          </div> 
       
        <div className="sm:flex items-center">
        <div className="form-control mr-0 sm:mr-5 sm:w-1/2">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <input
              type="text"
              defaultValue={description}
              placeholder="description"
              name="description"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label className="label" htmlFor="">
              Rating
            </label>
            <div
              className="flex justify-between items-center input input-bordered w-full"
              name="rating"
            >
              <div id="countRating">{ratingCount}</div>
              <div className="flex flex-col items-center">
                <button type="button" onClick={handleRatingIncrease}
                  disabled={ratingCount == 5}
                >
                  <FaAngleUp />
                </button>
                <button type="button"
                  onClick={handleRatingdecrease}
                  disabled={ratingCount == 0}
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
              <span className="label-text">Publishing Year</span>
            </label>
            <select onChange={handleChange} defaultValue={passingyear} className="input input-bordered w-full" name="passing" id="">
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
            <label className="label" htmlFor="">
              Genres
            </label>
            <select onChange={handleGenres}
              data-dropdown-toggle="dropdownId"
              className="input flex input-bordered w-full"
              aria-labelledby="dropdownDefaultButton"
              name="genres"
              id=""
            >
              <option value="">Select</option>
              <option value="Action">Action</option>
              <option value="Survival game">Survival game</option>
              <option value="Shooter game">Shooter game</option>
              <option value="Adventure games">Adventure games</option>
              <option value="First-person shooter">First-person shooter</option>
              <option value="Strategy game">Strategy game</option>
              <option value="Massively multiplayer online game">Massively multiplayer online game</option>
              <option value="Rhythm game">Rhythm game</option>
              <option value="Simulation video game">Simulation video game</option>
              <option value="Fighting">Fighting</option>
              <option value="ARPG">ARPG</option>
            </select>
          </div>
        </div>
        <div className="sm:flex">
          <div className="flex sm:w-1/2 flex-col mr-0 sm:mr-5">
            <label className="label" htmlFor="">
              Email
            </label>
            <input
              defaultValue={email}
              readOnly
              type="email"
              name="email"
              placeholder="game name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-auto sm:w-1/2 flex-col">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              defaultValue={name}
              readOnly
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn  text-white bg-[#16234d]">Update</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    Hellow
        </div>
    );
};

export default UpdateReview;