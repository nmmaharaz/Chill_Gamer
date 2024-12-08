import { useLoaderData } from "react-router-dom";
import Review from "../components/Review";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Typewriter } from "react-simple-typewriter";

const AllReview = () => {
    const info = useLoaderData();
    const [data, setData] = useState(info)
    const [value, setValue] = useState(null);
  const [ganresValue, setGanresValue] = useState(null);


useEffect(()=>{
    if(value){
        if(value.value == "Rating"){
                    fetch('https://chill-game-server-eight.vercel.app/rating')
                    .then(res=>res.json())
                    .then(data=>setData(data))
                }
                else{
                    fetch('https://chill-game-server-eight.vercel.app/publishingyear')
                    .then(res=>res.json())
                    .then(data=>setData(data))
                }
    
    }else if(ganresValue){
        fetch(`https://chill-game-server-eight.vercel.app/genres/${ganresValue.value}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    }
},[value, ganresValue, setData])



  const options = [
    { value: "Rating", label: "Rating" },
    { value: "Publishing Year", label: "Publishing Year" },
  ];
  const option = [
    { value: "Action", label: "Action" },
    { value: "Survival game", label: "Survival game" },
    { value: "Shooter game", label: "Shooter game" },
    { value: "Adventure games", label: "Adventure games" },
    { value: "First-person shooter", label: "First-person shooter" },
    { value: "Strategy game", label: "Strategy game" },
    {
      value: "Massively multiplayer online game",
      label: "Massively multiplayer online game",
    },
    { value: "Rhythm game", label: "Rhythm game" },
    { value: "Simulation video game", label: "Simulation video game" },
    { value: "Fighting", label: "Fighting" },
    { value: "ARPG", label: "ARPG" },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-end my-5">
        <div className="w-40">
          <Select
            placeholder="Sort"
            options={options}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="w-44 ml-5 mr-6">
          <Select
            placeholder="Genres"
            options={option}
            value={ganresValue}
            onChange={setGanresValue}
          />
        </div>
      </div>
      <div className="divider dark:divider-primary text-3xl my-12 dark:text-white  text-[#2140a9] font-bold">
          <Typewriter words={["All Reviews"]} />
        </div>
      <div className=" grid gap-2 gap-y-7 mb-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
