import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { capContext } from "../contextApi/captainContext";
import axios from "axios";
function CaptainLogin() {
  const navigate = useNavigate();
  const {capData,setcapData}=useContext(capContext)
  console.log(capData)
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

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
    const newCap = {
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/login`,
      newCap,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    

    if (response.status == 200) {
      navigate("/capHome");
      toast.success("User loged in successfully 🎉");
      localStorage.setItem("token", response.data.captain.token);
      setcapData(response.data.captain)
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
          <Link to="/capsignup" className="text-blue-500 ">
            Register as Captain
          </Link>
        </p>
      </div>
      <div className="">
        <Link
          to="/login"
          className="bg-[#69ff6f] text-white w-full rounded-md text-xl py-2 mt-6 bg-[#ffb269] relative bottom-1 flex justify-center "
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
