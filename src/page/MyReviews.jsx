import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import MyReviewsCard from "../components/MyReviewsCard";
import { Typewriter } from "react-simple-typewriter";

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
  const [myReview, setMyReview] = useState([])
  console.log(myReview)
  useEffect(()=>{
    fetch(`http://localhost:5000/myreview/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyReview(data))
  },[user])
    return (
        <div>
            <div className="w-8/12 mx-auto">
            <div className="divider dark:divider-primary text-3xl my-12 dark:text-white  text-[#2140a9] font-bold">
          <Typewriter words={["My Reviews"]} />
        </div>
            {
                myReview.map(review=><MyReviewsCard key={review._id} setMyReview={setMyReview} myReview={myReview} review={review}></MyReviewsCard>)
            }
            </div>
        </div>
    );
};

export default MyReviews;