import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextApi } from "../contextApi/context";
import axios from "axios";
import { toast } from "react-toastify";
function CaptainSignup() {
  const { userdata, setuserdata } = useContext(contextApi);
  const navigate=useNavigate()
  console.log(userdata, setuserdata);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    color: "",
    plate: "",
    capacity: "",
    vehicalType: "",
  });
  const handleChange = (e) => {
    setdata((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onsubmit = async(e) => {
    e.preventDefault();
    const newCaptain={
      fullname: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      email: data.email,
      password: data.password,
      vehical:{
         color:data.color,
         plate:data.plate,
         capacity:data.capacity,
         vehicalType:data.vehicalType
      }                                      
    };
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captain`,newCaptain)
    if(response.status)
    {
      navigate("/caplogin")
      toast.success("Account created  in successfully 🎉");
      // setuserdata(response.data.user)
      // localStorage.setItem("token",response.data.user.token);
      console.log(response)
    }
    console.log(data);
    setdata({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      color: "",
      plate: "",
     capacity: "",
     vehicalType: "",
  
    });
  };
  return (
    <div className="w-full h-screen p-7 flex flex-col justify-between ">
      <div className="mt-1">
        <img
          className="w-16 mt-3"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber_image"
        />
        <form className="mt-4">
          <h2 className="text-xl font-medium">What&apos;s our captain name </h2>
          <div className="w-full flex gap-2">
            <input
              required
              type="text"
              name="firstname"
              placeholder="First Name"
              className=" w-1/2  border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] "
              value={data.firstname}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-1/2  border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
              value={data.lastname}
              onChange={handleChange}
            />
          </div>
          <h2 className="text-xl font-medium mt-3">
            What&apos;s our captain email
          </h2>
          <input
            required
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
            value={data.email}
            onChange={handleChange}
          />
          <h2 className="text-xl font-medium mt-3 ">Enter password</h2>
          <input
            required
            type="password"
            placeholder="password "
            name="password"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
            value={data.password}
            onChange={handleChange}
          />
          <h2 className="text-xl font-medium mt-3">Vehical Information</h2>
          <div className="w-full flex gap-2 flex-col">
            <div className="flex gap-2">
              <input
                required
                type="text"
                name="color"
                placeholder="Color"
                className=" w-1/2  border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] "
                value={data.color}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="plate"
                placeholder="Number"
                className="w-1/2  border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
                value={data.plate}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                type="number"
                name="capacity"
                placeholder="Capacity"
                className="w-1/2  border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
                value={data.capacity}
                onChange={handleChange}
              />
              <select name="vehicalType" className="w-1/2 bg-[#e0d6d1] text-gray-400 rounded-md outline-none text-base placeholder:text-lg px-2 mt-2" onChange={handleChange} >
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Auto">Auto</option>
              </select>
            </div>
          </div>
          <button
            className="bg-black text-white w-full rounded-md text-xl py-2 mt-3"
            onClick={onsubmit}
          >
            Create Account
          </button>
        </form>
        <p className="text-lg text-center mt-2 font-sans">
          Already have a account?{" "}
          <Link to="/caplogin" className="text-blue-500 ">
            login here
          </Link>
        </p>
      </div>
      <div className="">
        <p className="text-[10px] leading-normal">
          By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS
          messages, including by automated means, from Uber and its affiliates
          to the number provided
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
