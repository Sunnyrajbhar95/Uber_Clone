import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { contextApi } from "../contextApi/context";

function UserLogin() {

  const {userdata,setuserdata}=useContext(contextApi)
  const [data, setdata] = useState({
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

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const newUser = {
      email: data.email,
      password: data.password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/signin`,
      newUser,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    if(response.status==200)
      {
         navigate("/theme")
         toast.success("User loged in successfully 🎉");
         setuserdata(response.data.user)
         localStorage.setItem("token",response.data.user.token);
         console.log(userdata)
      }
    setdata({
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
          <h2 className="text-2xl font-medium">What&apos;s your email</h2>
          <input
            required
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] "
            value={data.email}
            onChange={handleChange}
          />
          <h2 className="text-2xl font-medium mt-6 ">Enter password</h2>
          <input
            required
            type="password"
            placeholder="password "
            name="password"
            className="w-full border rounde rounded-md py-2 px-4  mt-2 outline-none placeholder:text-lg bg-[#e0d6d1] "
            value={data.password}
            onChange={handleChange}
          />
          <button
            className="bg-black text-white w-full rounded-md text-xl py-2 mt-6"
            onClick={onsubmit}
          >
            Login
          </button>
        </form>
        <p className="text-lg text-center mt-4 font-sans">
          New here?{" "}
          <Link to="/signup" className="text-blue-500 ">
            Create new account
          </Link>
        </p>
      </div>
      <div className="">
        <Link
          to="/caplogin"
          className="bg-black text-white w-full rounded-md text-xl py-2 mt-6 bg-green-500 relative bottom-1 flex justify-center "
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
