import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function UserProtectedWrapper() {
  const navigate=useNavigate()

  const token=localStorage.getItem('token')
  console.log(token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == null) {
      navigate('/login');
    }
  }, [navigate]);
  return <>
     <Outlet />;
  </>;
}

export default UserProtectedWrapper;
