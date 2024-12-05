import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')] bg-red-400 flex  justify-between flex-col pt-6 bg-cover bg-center">
      <img
        className="w-14 pl-4"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber_image"
      />
      <div className="bg-white flex flex-col justify-center items-center pb-3 mt-4 ">
        <h2 className="text-[1rem] font-semibold">Get started with Uber</h2>
        <Link to='/login' className="bg-black text-white w-2/4 py-1 text-[0.7rem] rounded-sm mt-3 flex justify-center items-center">
          Continue <IoIosArrowRoundForward className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
