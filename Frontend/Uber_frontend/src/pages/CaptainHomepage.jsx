import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import RidePopup from "./RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRide from "./ConfirmRide";



function CaptainHomepage() {
  const popRef=useRef(null);
  const conRef=useRef(null)
  const [popUp,setPopup]=useState(true);
  const [confirmRidePannel,setConfimRidepannel]=useState(false)

  useGSAP(() => {
    if (popUp) {
      gsap.to(popRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(popRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [popUp]);
  useGSAP(() => {
    if (confirmRidePannel) {
      gsap.to(conRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(conRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePannel]);
  useGSAP()
  return (
    <div className="h-screen flex flex-col">
      <Link
        to="/theme"
        className="fixed top-4 right-4 bg-white p-3 rounded-full text-2xl"
      >
        {" "}
        <RiHome4Line />
      </Link>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://as1.ftcdn.net/v2/jpg/07/28/30/26/1000_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        />
      </div>

      {/* Bottom Half */}
      <div className="h-2/5 bg-white flex flex-col  p-4">
        <div className="w-full flex justify-between ">
          <div className="flex  items-center gap-2">
            <img
              className="w-10 p-2 rounded-s-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY9OL38FHPKucWTlkXqHdwd4__RhbYgEOIw&s"
              alt=""
            />
            <h4 className="text-xl font-medium">Vikas Patel</h4>
          </div>
          <div>
            <h4 className="text-2xl font-medium">₹219</h4>
            <p className="text-gray-400">Earned</p>
          </div>
        </div>
        <div className="flex gap-8 justify-center bg-gray-300 rounded-lg py-3 mt-4">
          <div className="flex flex-col items-center ">
            <i className="ri-time-line text-3xl font-semibold"></i>
            <h4 className="text-2xl font-semibold">10.2</h4>
            <p className="text-sm font-thin text-gray-400">Hours online</p>
          </div>
          <div className="flex flex-col items-center ">
          <i className="ri-speed-up-line text-3xl font-semibold"></i>
            <h4 className="text-2xl font-semibold">10.2</h4>
            <p className="text-sm font-thin text-gray-400">Hours online</p>
          </div>
          <div className="flex flex-col items-center ">
          <i className="ri-booklet-line text-3xl font-semibold"></i>
            <h4 className="text-2xl font-semibold">10.2</h4>
            <p className="text-sm font-thin text-gray-400">Hours online</p>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 z-20 bg-white flex flex-col items-center p-2 " ref={popRef}>
          <RidePopup  setPopup={setPopup} setConfimRidepannel={setConfimRidepannel}/>
      </div>
      <div className="w-full h-full fixed bottom-0 z-20 bg-white flex flex-col items-center p-2 " ref={conRef}>
          <ConfirmRide  setConfimRidepannel={setConfimRidepannel} setPopup={setPopup} />
      </div>
    </div>
  );
}

export default CaptainHomepage;
