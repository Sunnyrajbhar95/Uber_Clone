import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { IoIosArrowUp } from "react-icons/io";
import Location from "./Location";
import { RiUserFill } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiCurrencyFill } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";


function Theme() {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const [pannel, setPannel] = useState(false);
  const [vehicalPannel, setvehicalPannel] = useState(false);
  const [confirmpannel,setconfirmpannel]=useState(false);
  const btnRef = useRef();
  const arrowRef = useRef();
  const vehicalRef = useRef();
  const conRef=useRef()

  const handleChange = (e) => {
    e.preventDefault();
    setLocation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    // Animate height using GSAP based on the `pannel` state
    if (pannel) {
      gsap.to(btnRef.current, {
        height: "70%", // Expand
        duration: 0.2, // Optional: Add duration for smooth animation
      });
      gsap.to(arrowRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(btnRef.current, {
        height: "0%", // Collapse
        duration: 0.2,
      });
      gsap.to(arrowRef.current, {
        opacity: 0,
      });
    }
  }, [pannel]);
  console.log(vehicalPannel);
  useGSAP(() => {
    if (vehicalPannel) {
      gsap.to(vehicalRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehicalRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicalPannel]);
  useGSAP(() => {
    if (confirmpannel) {
      gsap.to(conRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(conRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmpannel]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        className="w-16 absolute top-6 left-8"
        alt="Uber"
      />

      {/* Background Map */}
      <div className="h-full w-screen">
        <img
          className="h-full object-cover object-center"
          src="https://as1.ftcdn.net/v2/jpg/07/28/30/26/1000_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt="map"
        />
      </div>

      {/* Form Section */}
      <div className="w-screen absolute top-0 h-full flex flex-col justify-end">
        <div className="p-6 h-[30%] bg-white">
          <h4
            className="text-xl font-medium absolute right-10 opacity-0 "
            ref={arrowRef}
            onClick={() => {
              setPannel(false);
            }}
          >
            <IoIosArrowUp />
          </h4>
          <h4 className="text-3xl font-medium">Find your trip</h4>
          <form>
            <input
              type="text"
              value={location.lat}
              className="w-full px-10 mt-4 py-2 text-md placeholder:text-md placeholder:text-black bg-[#e8e1de] text-black rounded-md outline-none"
              name="lat"
              placeholder="Add your pick-up location"
              onClick={() => setPannel(true)} // +Expand panel on click
              onChange={handleChange}
            />
            <input
              type="text"
              value={location.lng}
              className="w-full mt-3 px-10 py-2 text-md placeholder:text-md placeholder:text-black bg-[#e8e1de] text-black rounded-md outline-none"
              name="lng"
              placeholder="Choose your destination"
              onClick={() => setPannel(true)} // Expand panel on click
              onChange={handleChange}
            />
          </form>
        </div>

        {/* Animated Panel */}
        <div
          className="bg-white transition-all px-6 text-base font-medium" // Optional: Add Tailwind transition
          ref={btnRef}
        >
          <Location setvehicalPannel={setvehicalPannel} setPannel={setPannel} />
        </div>
      </div>

      <div
        className="w-full fixed bottom-0 z-10 bg-white p-4 translate-y-full "
        ref={vehicalRef}
      >
        <h5 className="text-2xl w-full flex justify-center ">
          <IoIosArrowDown
            className="text-gray-300 text-center  "
            onClick={() => {
              setvehicalPannel(false);
            }}
          />
        </h5>
        <div className=" flex items-center gap-4  border-2 border-gray-100 rounded-lg p-2 mt-2" onClick={()=>{
            setconfirmpannel(true)
        }}>
          <img
            className="w-20"
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt=""
          />
          <div>
            <h4 className="flex text-xl font-medium  items-center ">
              Ubergo{" "}
              <span className="text-md flex  items-center ">
                <RiUserFill /> 4
              </span>
            </h4>
            <h4 className="w-full text-lg  ">2 min away 15:49</h4>
            <h4 className="w-full text-xs">Affordable, compact rides</h4>
          </div>
          <h4 className="text-lg font-semibold flex items-center">
            <MdCurrencyRupee /> 120.25
          </h4>
        </div>
        <div className=" flex items-center gap-4  border-2 rounded-lg p-2 mt-2 border-gray-100 " onClick={()=>{
           setconfirmpannel(true)
        }}>
          <img
            className="w-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div>
            <h4 className="flex text-xl font-medium  items-center ">
              Moto{" "}
              <span className="text-md flex  items-center ">
                <RiUserFill /> 1
              </span>
            </h4>
            <h4 className="w-full text-lg  ">3 min away 12:49</h4>
            <h4 className="w-full text-xs">Affordable, compact rides</h4>
          </div>
          <h4 className="text-lg font-semibold flex items-center">
            <MdCurrencyRupee />
            65
          </h4>
        </div>
        <div className=" flex items-center gap-4  border-2 border-gray-100 rounded-lg p-2 mt-2"  onClick={()=>{
           setconfirmpannel(true)
        }}>
          <img
            className="w-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div>
            <h4 className="flex text-xl font-medium  items-center ">
              UberAuto{" "}
              <span className="text-md flex  items-center ">
                <RiUserFill /> 4
              </span>
            </h4>
            <h4 className="w-full text-lg  ">5 min away 20:49</h4>
            <h4 className="w-full text-xs">Affordable, compact rides</h4>
          </div>
          <h4 className="text-lg font-semibold flex items-center">
            <MdCurrencyRupee /> 120.25
          </h4>
        </div>
      </div>
      <div className="w-full fixed bottom-0 z-20 bg-white flex flex-col items-center p-2 translate-y-full" ref={conRef}>
      <h5 className="text-2xl w-full flex justify-center ">
          <IoIosArrowDown
            className="text-gray-300 text-center "
            onClick={()=>{
              setconfirmpannel(false)
              setvehicalPannel(false)
            }}
          />
        </h5>
        <div className="">
          <img
            className="w-36"
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt=""
          />
        </div>
        <div className=" w-full flex gap-3 items-center  p-3 border-t-2 border-gray-300 ">
          <h4 className="text-2xl">
            <FaLocationDot className="" />
          </h4>
          <div className="w-full border-b-2 border-gray-300 py-2 ">
            <h4 className="text-2xl font-bold">562/11-A</h4>
            <p className="text-lg text-gray-500">kaikondrahali,Bengluru, Karantaka </p>
          </div>
         
        </div>
         <div className="w-full flex gap-3 items-center  p-3">
             <h4 className="text-2xl"><LuBuilding2 /></h4>
              <div className="w-full border-b-2 border-gray-300 py-2">
              <h4 className="text-2xl font-bold">
                  Third Wave Coffee
              </h4>
              <p className="text-lg text-gray-500">78D 2K, Karanpur, Chhota Baghara</p>
              </div>
          </div>
          <div className="w-full flex gap-3 items-center  p-3">
            <h4 className="text-2xl"><RiCurrencyFill /></h4>
             <div className="flex justify-center flex-col w-full border-b-2 border-gray-300 py-2 ">
                  <div className="flex items-center"> 
                  <h4 className="text-2xl font-bold"><MdCurrencyRupee /></h4>
                  <p className="text-2xl font-bold">119</p>
                  </div>
                <p className="text-lg text-gray-500">cash cash</p>
             </div>
          </div>
          <button className="w-full bg-green-500 mt-2 text-xl py-2 rounded-lg">Confirm</button>
      </div>
    </div>
  );
}

export default Theme;
