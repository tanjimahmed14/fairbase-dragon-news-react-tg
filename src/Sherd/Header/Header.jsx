import moment from "moment";
import logo from "../../assets/logo.png";


const Header = () => {
  return (
    <div className="space-y-1 text-center mt-10">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <h1>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h1>
    </div>
  );
};

export default Header;
