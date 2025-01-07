// import { useState } from "react";
import { CgMail, CgProfile } from "react-icons/cg";
import { GrRadialSelected } from "react-icons/gr";
import { MdSaveAs } from "react-icons/md";
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
    <div className="dark:bg-white py-36 bg-black">
        <div className="">
          <div className="w-10/12 mx-auto min-h-screen">
            <div className="flex flex-col bg-opacity-20 p-8 rounded-2xl dark:bg-opacity-20 bg-[#633aa9] items-center justify-between">
             <div className="w-full">
             <img
                src={gameName}
                className=" w-full h-[400px] object-cover  rounded-lg shadow-2xl"
              />
             </div>
              <div className="-mt-16 dark:*:text-[#633aa9] *:text-white ">
                <h1 className="text-5xl font-bold">{Ganres}</h1>
                <div>
                <div className=" justify-between flex rounded-2xl items-center px-8 py-4 dark:bg-opacity-5 bg-[#12042a] mt-10">
                <div className="flex items-center">
                <p className="flex items-center mr-16"> <CgProfile className="mr-2 text-[#8750f7] hover:text-white text-2xl" />
                {name} </p>
                <p className="flex items-center "> <CgMail className="mr-2 text-[#8750f7]  hover:text-white text-2xl"/>
                {email} </p>
                </div>
                <div>
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
                </div>
                <p className="text-2xl  font-semibold">
                 {gameTitle}
                </p>
                <p className="flex  pt-4 items-center">
                {description} </p>
                </div>
                <div className="flex justify-between items-center">
                <button onClick={handleWishlist} className="btn btn-outline btn-secondary mt-3">Add to WatchList</button>
                <p className="flex items-center text-xl"><MdSaveAs className="text-[#633aa9] mr-2 text-xl" /> Published: {passingyear}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default ReviewDetails;
