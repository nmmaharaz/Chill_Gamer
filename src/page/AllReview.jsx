import { useLoaderData } from "react-router-dom";
import Review from "../components/Review";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Typewriter } from "react-simple-typewriter";
import Title from "../components/shered/Title";

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
    <div className="dark:bg-white bg-black">
      <div className="w-10/12 mx-auto">
      <div className="flex justify-end py-10">
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
      <div className="text-3xl my-2 dark:text-white  text-[#2140a9] font-bold">
          <Title title={"All Reviews"}></Title>
        </div>
      <div className="grid pt-6 pb-12 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllReview;
