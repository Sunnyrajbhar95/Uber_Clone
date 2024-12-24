import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CapLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token, "from caplogout");
    const config = {
      headers: {
        "x-access": token, // Send token as 'x-auth-token' or any custom header
      },
    };
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/capLogout`, config)
      .then((response) => {
        console.log(response);
        localStorage.clear();
        navigate("/caplogin");
      });
  }, [navigate]);
  return <div></div>;
}

export default CapLogout;
