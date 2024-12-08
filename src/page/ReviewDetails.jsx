// import { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const data = useLoaderData();
  // const [wishlist, setWishtlist] = useState(0)
  const {
    gameName,
    gameTitle,
    description,
    rating,
    passingyear,
    Ganres,
    email,
    name,
  } = data;
  const handleWishlist = (e) =>{
    e.preventDefault()
    const ganres = Ganres.toString()
    // setWishtlist( wishlist + 1)
    const addWishlist = { gameName,
      gameTitle,
      description,
      rating,
      passingyear,
      ganres,
      email,
      name}
    fetch('https://chill-game-server-eight.vercel.app/mywishlist',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addWishlist)
    })
    .then(res=>res.json)
    .then(data=>console.log(data),
    Swal.fire({
      title: 'Sueccess!',
      text: 'Review added successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
   )
  }


  return (
    <div className="">
        <div className="">
          <div className="w-7/12 mx-auto min-h-screen">
            <div className="flex my-10 items-center justify-between flex-col lg:flex-row-reverse">
             <div className="min-w-[350px]">
             <img
                src={gameName}
                className=" w-full rounded-lg shadow-2xl"
              />
             </div>
              <div className="">
                <h1 className="text-5xl text-red-700 font-bold">{Ganres}</h1>
                <p className="text-2xl pt-4 text-black font-semibold">
                 {gameTitle}
                </p>
                <p className="flex text-black pt-11 items-center">
                {description} </p>
                <p className="pt-1 text-black"> 
                {name} </p>
                <p className="py-1 text-black"> 
                {email} </p>
                <div className="flex items-center">
                  <p className="text-black mr-8">Publishing Year: {passingyear}</p>
                <div className="flex justify-between">
                  <p className="mr-2">Rating:</p>
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
                <button onClick={handleWishlist} className="btn btn-outline btn-secondary mt-3">Add to WatchList</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default ReviewDetails;
