import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "x-access": token, // Send token as 'x-auth-token' or any custom header
    },
  };
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/api/v1/logout`, config)
    .then((data) => {
      console.log(data);
      localStorage.clear()
      navigate("/login");
    });
  return <div>UserLogout</div>;
}

export default UserLogout;
