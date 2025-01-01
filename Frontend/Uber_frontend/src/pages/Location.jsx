import { FaLocationDot } from "react-icons/fa6";

function Location(props) {
  console.log(props.setvehicalPannel);
  const location = [
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
    "78D 2K, Karanpur, Chhota Baghara, Prayagraj - 211002, Uttar Pradesh",
  ];
  return (
    <div>
      {props.source?.map((data, index) => {
        return (
          <div
            onClick={() => {
              // props.setvehicalPannel(true);
              // props.setPannel(false)
              props.setPickup(data);

              props.setSource(null);
            }}
            key={index}
            className="flex justify-start items-center mt-5 gap-3 border-2 border-gray-100 active:border-black   p-2 w-full rounded-lg "
          >
            <h4 className="bg-gray-300 h-10 w-10 text-2xl rounded-full flex justify-center items-center ">
              <FaLocationDot />
            </h4>
            <h4>{data}</h4>
          </div>
        );
      })}
      {props.target?.map((data, index) => {
        return (
          <div
            onClick={() => {
              // props.setvehicalPannel(true);
              // props.setPannel(false)
              props.setDestination(data);

              props.setTarget(null);
            }}
            key={index}
            className="flex justify-start items-center mt-5 gap-3 border-2 border-gray-100 active:border-black   p-2 w-full rounded-lg "
          >
            <h4 className="bg-gray-300 h-10 w-10 text-2xl rounded-full flex justify-center items-center ">
              <FaLocationDot />
            </h4>
            <h4>{data}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
