import { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const MyReviewsCard = ({ review, myReview, setMyReview }) => {

  const {
    _id,
    gameName,
    gameTitle,
    description,
    rating,
    Ganres} = review;

  const handleDelete =(id) =>{
    fetch(`https://chill-game-server-eight.vercel.app/review/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
          Swal.fire({
            title: 'Sueccess!',
            text: 'Review added successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
          const remaining = myReview.filter(r => r._id !==id)
          setMyReview(remaining)
        }
    })
  }
  return (
    <div className="py-4 ">
      <div className="border bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] dark:bg-white dark:*:text-black *:text-white rounded-2xl p-5 border-solid border-gray-200">
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="w-full sm:w-36 lg:w-28 mr-7  h-60 sm:h-48 lg:h-36">
        <img src={gameName} className="w-full h-full rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold">{Ganres}</h1>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
            <div>
            <Link to={`/updateReview/${_id}`} className="btn btn-outline mr-3 btn-primary">Update</Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyReviewsCard;
