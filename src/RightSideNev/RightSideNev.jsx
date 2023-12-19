import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZoneImg from '../assets/qZone1.png'
import QZoneImg2 from '../assets/qZone2.png'
import QZoneImg3 from '../assets/qZone3.png'



const RightSideNev = () => {
    return (
        <div className="p-4">
            <div className="space-y-2">
                <h2 className="font-semibold mb-4 text-xl">Login With</h2>
                <button className="btn btn-outline btn-success w-full">
                    <FaGoogle></FaGoogle>
                    LogIn with google</button>
                <button className="btn btn-outline btn-success w-full">
                    <FaGithub></FaGithub>
                    LogIn with Github</button>
            </div>
            <div>
                <h2 className="font-semibold mt-5 text-xl mb-4">Find Us </h2>
                <div className="border-2 rounded-t-lg p-2">
                <a href="" className="flex items-center">
                    <span className="mr-2 bg-gray-300  p-2 rounded-full text-blue-700"><FaFacebook></FaFacebook></span>
                    Facebook
                </a>
                </div>
                <div className="border-x-2 p-2">
                <a href="" className="flex items-center">
                    <span className="mr-2 bg-gray-300  p-2 rounded-full text-green-400"><FaTwitter></FaTwitter></span>
                    Twitter
                </a>
                </div>
                <div className="border-2 rounded-b-lg p-2">
                <a href="" className="flex items-center">
                    <span className="mr-2 bg-gray-300  p-2 rounded-full text-rose-500"><FaInstagram></FaInstagram></span>
                    Instagram
                </a>
                </div>
            </div>
            <div className="bg-[#F3F3F3] p-3 mt-5">
                <h4 className="text-xl font-semibold mb-5 mt-2">Q-zone</h4>
                <img src={QZoneImg} alt="" />
                <img src={QZoneImg2} alt="" />
                <img src={QZoneImg3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNev;