import { useParams } from "react-router-dom";
import Header from "../../Sherd/Header/Header";
import RightSideNev from "../../RightSideNev/RightSideNev";
import Navber from "../../Sherd/Navber/Navber";


const SingleNews = () => {
    const {id} = useParams();

    console.log(id)
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>jgfgefg</h1>
                </div>
                <div className="border">
                    <RightSideNev></RightSideNev>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;