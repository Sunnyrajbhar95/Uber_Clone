import { MdCurrencyRupee } from "react-icons/md";

import { RiCurrencyFill } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen flex flex-col">
        <Link to='/theme' className="fixed top-4 right-4 bg-white p-3 rounded-full text-2xl"> <RiHome4Line /></Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://as1.ftcdn.net/v2/jpg/07/28/30/26/1000_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        />
      </div>

      {/* Bottom Half */}
      <div className="h-1/2 bg-white flex flex-col items-center p-4">
        
        <div>
          <img
            className="w-20"
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt=""
          />
        </div>

        {/* Location Section */}
        <div className="w-full flex gap-2 items-center p-2">
          <h4 className="text-xl">
            <LuBuilding2 />
          </h4>
          <div className="w-full border-b-2 border-gray-300 py-2">
            <h4 className="text-xl font-bold">Third Wave Coffee</h4>
            <p className="text-lg text-gray-500">
              78D 2K, Karanpur, Chhota Baghara
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="w-full flex gap-2 items-center p-2">
          <h4 className="text-xl">
            <RiCurrencyFill />
          </h4>
          <div className="flex justify-center flex-col w-full border-b-2 border-gray-300 py-2">
            <div className="flex items-center">
              <h4 className="text-xl font-bold">
                <MdCurrencyRupee />
              </h4>
              <p className="text-xl font-bold">119</p>
            </div>
            <p className="text-lg text-gray-500">cash cash</p>
          </div>
        </div>

        <button className="w-full bg-green-500 mt-2 text-xl py-2 rounded-lg">
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
