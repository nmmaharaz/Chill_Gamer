import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { MdDelete } from "react-icons/md";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import Title from "../components/shered/Title";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);
  const [mywishlist, setMyWishList] = useState([]);
  useEffect(() => {
    fetch(`https://chill-game-server-eight.vercel.app/mywishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyWishList(data));
  }, [user]);


  
  const handleDelete =(id) =>{
    fetch(`https://chill-game-server-eight.vercel.app/mywishlist/${id}`,{
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
          const remaining = mywishlist.filter(r => r._id !==id)
          setMyWishList(remaining)
        }
    })
  }

  return (
    <div className="dark:bg-white bg-black">
      <div className="w-10/12 py-36  mx-auto">
       <div className="mb-4">
          <Title title={"My Wishlist"}></Title>
        </div>
      <div className="overflow-x-auto">
        <table className="table  bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] dark:bg-white dark:*:text-black *:text-white rounded-2xl p-5 border-solid border-gray-200">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Details</th>
              <th>User Info.</th>
            </tr>
          </thead>
          <tbody>
            {mywishlist.map((wishlist) => (
              <tr className=" bg-[#141119] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] dark:bg-white dark:*:text-black *:text-white rounded-2xl p-5 border-solid border-gray-200" key={wishlist._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={wishlist.gameName}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{wishlist.ganres}</div>
                      <div className="text-sm opacity-50">
                        {wishlist.gameTitle}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="min-w-[300px]">
                  {wishlist.description}          
                </td>
                <td className="min-w-[130px]">
                {
                wishlist.rating && ( <StarRatings
                    rating={wishlist.rating}
                    starRatedColor="#f57f25"
                    starDimension="18px"
                    starSpacing="1px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
                  <br />
                  <span>
                    {wishlist.passingyear}
                  </span>
                </td>
                <td className="">
                  {wishlist.email}
                  <br />
                  <span className="bg-base-300 rounded-xl px-3">
                    {wishlist.name}
                  </span>
                </td>
                <th>
                  <MdDelete onClick={()=>handleDelete(wishlist._id)} className="text-2xl mr-3 cursor-pointer hover:text-red-400" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyWishlist;
