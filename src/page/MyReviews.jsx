import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import MyReviewsCard from "../components/MyReviewsCard";

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
            {
                myReview.map(review=><MyReviewsCard key={review._id} setMyReview={setMyReview} myReview={myReview} review={review}></MyReviewsCard>)
            }
            </div>
        </div>
    );
};

export default MyReviews;