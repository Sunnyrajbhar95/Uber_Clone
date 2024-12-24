import { MdCurrencyRupee } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiCurrencyFill } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function ConfirmRide(props) {
    return (
        <div className="w-full  flex flex-col items-center p-2 ">
          <h5 className="text-2xl w-full flex justify-center ">
            <IoIosArrowDown
              
            />
          </h5>
          <div className="w-full mt-4">
            <h4 className="text-2xl font-semibold ">Confirm Ride to Start</h4>
          </div>
          <div className="w-full flex justify-between bg-yellow-400 p-2 rounded-lg mt-3 items-center">
            <div className="flex  items-center gap-2">
              <img
                className="w-10 p-2 rounded-s-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY9OL38FHPKucWTlkXqHdwd4__RhbYgEOIw&s"
                alt=""
              />
              <h4 className="text-xl font-medium">Vikas Patel</h4>
            </div>
            <div>
              <h4 className="text-xl font-medium">2.2KM</h4>
            </div>
          </div>
    
          <div className=" w-full flex gap-3 items-center  p-3  border-gray-300 ">
            <h4 className="text-2xl">
              <FaLocationDot className="" />
            </h4>
            <div className="w-full border-b-2 border-gray-300 py-2 ">
              <h4 className="text-2xl font-bold">562/11-A</h4>
              <p className="text-lg text-gray-500">
                kaikondrahali, Bengluru, Karantaka{" "}
              </p>
            </div>
          </div>
          <div className="w-full flex gap-3 items-center  p-3">
            <h4 className="text-2xl">
              <LuBuilding2 />
            </h4>
            <div className="w-full border-b-2 border-gray-300 py-2">
              <h4 className="text-2xl font-bold">Third Wave Coffee</h4>
              <p className="text-lg text-gray-500">
                78D 2K, Karanpur, Chhota Baghara
              </p>
            </div>
          </div>
          <div className="w-full flex gap-3 items-center  p-3">
            <h4 className="text-2xl">
              <RiCurrencyFill />
            </h4>
            <div className="flex justify-center flex-col w-full border-b-2 border-gray-300 py-2 ">
              <div className="flex items-center">
                <h4 className="text-2xl font-bold">
                  <MdCurrencyRupee />
                </h4>
                <p className="text-2xl font-bold">119</p>
              </div>
              <p className="text-lg text-gray-500">cash cash</p>
            </div>
          </div>
          <Link to="/captain-ride" className="w-full flex justify-center  bg-green-500 mt-2 text-xl py-2 rounded-lg">
            Confirm
          </Link>
          <button
            className="w-full bg-red-600 text-white mt-2 text-xl py-2 rounded-lg"
        onClick={()=>{
            props.setConfimRidepannel(false)
            props.setPopup(false)
        }}
          >
            Cancel
          </button>
        </div>
      );
}

export default ConfirmRide
