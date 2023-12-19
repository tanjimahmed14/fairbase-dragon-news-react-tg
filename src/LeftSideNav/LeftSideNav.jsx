import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";


const LeftSideNav = () => {
    const [categories, setCategorie] = useState([]);
    const [shortNews, setShortNews] = useState([]);


    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then( data => setCategorie(data))
    },[])


    useEffect(() => {
        fetch('shortNews.json')
        .then(res => res.json())
        .then(data => setShortNews(data))
    },[])

  return (
    <div>
      <h1 className="text-2xl font-semibold p-3"> All categories</h1>
      <div className=" px-4 space-y-2">
        {
            categories.map(categori => <NavLink 
                className="block text-base p-4 hover:bg-gray-400"
                key={categori.id}
            to={`/categori/${categori.id}`}>
                {categori.name}
            </NavLink>)
        }
      </div>
      <div className="p-4 space-y-5 mt-10">
        {
            shortNews.map(news => <div key={news.id}>
                <img src={news.img} alt="" />
                <h1 className="text-base font-semibold mt-4 mb-3" >{news.title}</h1>
                <div className="flex justify-between">
                    <span>{news.category}</span>
                    <span className="flex  items-center text-[#9F9F9F] ">
                        <span className="mr-2 text-xl -mt-1"><FiCalendar></FiCalendar></span>
                        {news.date}</span>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
<h1>Left side</h1>;
