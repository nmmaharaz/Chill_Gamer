import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import MyReviewsCard from "../components/MyReviewsCard";
import { Typewriter } from "react-simple-typewriter";
import Title from "../components/shered/Title";

const MyReviews = () => {
    const {user} = useContext(AuthContext)
  const [myReview, setMyReview] = useState([])
  useEffect(()=>{
    fetch(`https://chill-game-server-eight.vercel.app/myreview/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyReview(data))
  },[user])
    return (
        <div className="dark:bg-white bg-black">
            <div className="w-8/12 mx-auto">
            <div className="pt-36">
          <Title title={"My Reviews"}></Title>
        </div>
            {
                myReview.map(review=><MyReviewsCard key={review._id} setMyReview={setMyReview} myReview={myReview} review={review}></MyReviewsCard>)
            }
            </div>
        </div>
    );
};

export default MyReviews;