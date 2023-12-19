import LeftSideNav from "../../LeftSideNav/LeftSideNav";
import RightSideNev from "../../RightSideNev/RightSideNev";
import Header from "../../Sherd/Header/Header";
import Navber from "../../Sherd/Navber/Navber";
import MiddelNews from "../MiddelNews/MiddelNews";
import BreckingNews from "./BreckingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreckingNews></BreckingNews>
      <Navber></Navber>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border ">
          <MiddelNews></MiddelNews>
        </div>
        <div className="border">
          <RightSideNev></RightSideNev>
        </div>
      </div>
    </div>
  );
};

export default Home;
