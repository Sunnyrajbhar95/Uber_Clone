import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./pages/Theme";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHomepage from "./pages/CaptainHomepage";
import CapProtectedwrapper from "./pages/CapProtectedwrapper";
import CapLogout from "./pages/CapLogout";
import Riding from "./pages/Riding";
import CaptainRide from "./pages/CaptainRide";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/caplogin" element={<CaptainLogin />} />
          <Route path="/capsignup" element={<CaptainSignup />} />
          <Route path="/riding" element={<Riding/>}/>
          <Route path="/captain-ride" element={<CaptainRide/>}/>
          <Route element={<UserProtectedWrapper />}>
            <Route path="/theme" element={<Theme />} />
          </Route>
          <Route element={<UserProtectedWrapper />}>
            <Route path="/user/logout" element={<UserLogout />} />
          </Route>
          <Route element={<CapProtectedwrapper />}>
            <Route path="/capHome" element={<CaptainHomepage />} />
          </Route>
          <Route element={<CapProtectedwrapper />}>
            <Route path="/captain/logout" element={<CapLogout/>} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
