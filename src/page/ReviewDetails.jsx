// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
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
    fetch('http://localhost:5000/mywishlist',{
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
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={gameName} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{Ganres}</h1>
            <p>{rating}</p>
            <p className="py-6 text-xl">{gameTitle}</p>
            <p className="py-6">{description}</p>
            <div className="flex">
              <p className="mr-6">{email}</p>
              <p>{name}</p>
              <p>{passingyear}</p>
            </div>
            <button  onClick={handleWishlist} className="btn btn-outline btn-secondary">Add to WatchList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
