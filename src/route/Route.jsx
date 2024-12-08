import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout.jsx/MainLayout";
import Home from "../page/Home";
import Login from "../page/Login";
import Registration from "../page/Registration";
import AddReview from "../page/AddReview";
import AllReview from "../page/AllReview";
import ReviewDetails from "../page/ReviewDetails";
import MyReviews from "../page/MyReviews";
import UpdateReview from "../page/UpdateReview";
import MyWishlist from "../page/MyWishlist";
import ForgetPassword from "../page/ForgetPassword";
import PrivateRoute from "../components/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/highestratedgame')
            
        },
        {
          path:"/reviews",
          element:<AllReview></AllReview>,
          loader:()=>fetch('http://localhost:5000/review')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/registration",
            element:<Registration></Registration>
        },
        {
          path:"/addReview",
          element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
        },
        {
          path:"/review/:id",
          element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
          path:"/myReviews",
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path:"/updateReview/:id",
          element:<UpdateReview></UpdateReview>,
          loader: ({params})=>fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
          path:"/myWatchlist",
          element:<PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
        },
        {
          path:"/forgetpassword",
          element:<ForgetPassword></ForgetPassword>
        }
      ]
    },
  ]);

export default router