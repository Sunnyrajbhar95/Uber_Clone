import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"
function UserSignup() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  
const navigate=useNavigate()
  const handleChange = (e) => {
    setdata((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onsubmit =async (e) => {
    e.preventDefault();
    const newUser={
      fullname:{
        firstname:data.firstname,
        lastname:data.lastname
      },
      email:data.email,
      password:data.password
    }
     console.log(import.meta.env.VITE_BASE_URL)
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/signup`,newUser,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status)
    if(response.status==200)
    {
       navigate("/login")
       toast.success("Account created successfully 🎉");
    }

  
    setdata({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-full h-screen p-7 flex flex-col justify-between ">
      <div className="mt-6">
        <img
          className="w-16 mt-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber_image"
        />
        <form className="mt-6">
          <h2 className="text-2xl font-medium">What&apos;s your name </h2>
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
          <h2 className="text-2xl font-medium mt-5">What&apos;s your email</h2>
          <input
            required
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
            value={data.email}
            onChange={handleChange}
          />
          <h2 className="text-2xl font-medium mt-5 ">Enter password</h2>
          <input
            required
            type="password"
            placeholder="password "
            name="password"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] text-base "
            value={data.password}
            onChange={handleChange}
          />
          <button
            className="bg-black text-white w-full rounded-md text-xl py-2 mt-6"
            onClick={onsubmit}
          >
            Register
          </button>
        </form>
        <p className="text-lg text-center mt-4 font-sans">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-500 ">
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

export default UserSignup;
