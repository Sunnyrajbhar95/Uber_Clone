import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
        <div>
           <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<UserLogin/>}/>
             <Route path="/signup" element={<UserSignup/>}/>
             <Route path="/caplogin" element={<CaptainLogin/>}/>
             <Route path="/capsignup" element={<CaptainSignup/>}/>
           </Routes>
           <ToastContainer />
        </div>
    </>
  );
}

export default App;
