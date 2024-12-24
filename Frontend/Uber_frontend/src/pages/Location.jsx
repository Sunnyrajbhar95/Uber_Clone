import { FaLocationDot } from "react-icons/fa6";

function Location(props) {
  console.log(props.setvehicalPannel)
  const location = [
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
  ];
  return (
    <div>
      {location.map((data, index) => {
        return (
          <div
             onClick={()=>{
              props.setvehicalPannel(true);
              props.setPannel(false)
             }}
            key={index}
            className="flex justify-center items-center mt-5 gap-3 border-2 border-gray-100 active:border-black   p-2 w-full rounded-lg "
          >
            <h4 className="bg-gray-300 h-10 w-16 text-2xl rounded-full flex justify-center items-center ">
              <FaLocationDot />
            </h4>
            <h4>
              78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar
              Pradesh
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
