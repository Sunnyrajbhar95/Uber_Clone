import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function CapProtectedwrapper() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == null) {
      navigate("/caplogin");
    }
    const config = {
        headers: {
          "x-access": token, // Send token as 'x-auth-token' or any custom header
        },
      };

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/capprofile`,config)
      .then((response) => {
        console.log(response);
        navigate("/capHome");
      })
      .catch((err) => {
        console.log(err);
        navigate("/caplogin");
      });
    setloading(false);
  }, [navigate]);

  return loading == true ? "Loading..." : <Outlet />;
}

export default CapProtectedwrapper;
