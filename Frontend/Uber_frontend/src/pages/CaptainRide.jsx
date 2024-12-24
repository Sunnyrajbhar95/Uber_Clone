import { useRef, useState } from "react";
import FinishRide from "./FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CaptainRide() {
  const [finishRide,setfinishRide]=useState(false);
  const finRef=useRef(null)

  useGSAP(()=>{
    if (finishRide) {
      gsap.to(finRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(finRef.current, {
        transform: "translateY(100%)",
      });
    }
  },[finishRide])
  return (
    <div className="w-screen h-screen">
      <img
        className="w-20 pl-4 fixed top-8  "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber_image"
      />
      <div className="h-4/5">
        <img
          src="https://as1.ftcdn.net/v2/jpg/07/28/30/26/1000_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="h-1/5 bg-yellow-300 p-3 flex w-screen flex-col items-center ">
        <h4>
          <i className="ri-arrow-up-wide-line text-2xl font-semibold text-gray-500" onClick={()=>{
            setfinishRide(true)
          }}></i>
        </h4>
        <div className="w-full flex justify-between items-center mt-3 px-2">
          <h4 className="text-2xl font-semibold">4KM away</h4>
          <button className="  bg-green-500   text-white py-2 px-6 text-lg rounded-lg" onClick={()=>{
            setfinishRide(true)
          }}>
            Complete Ride
          </button>
        </div>
      </div>
       <div className="w-full h-full fixed bottom-0 z-20 bg-white flex flex-col items-center p-2 " ref={finRef}>
          <FinishRide setfinishRide={setfinishRide} />
       </div>
    </div>
  );
}

export default CaptainRide;
