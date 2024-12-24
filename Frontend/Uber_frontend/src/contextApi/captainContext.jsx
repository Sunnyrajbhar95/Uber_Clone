import { createContext, useState } from "react";

const capContext = createContext();

const CaptainProvider = ({ children }) => {
  const [capData, setcapData] = useState({});

  console.log(capData,"from cap api");

  return (
    <capContext.Provider value={{ capData, setcapData }}>
      {children}
    </capContext.Provider>
  );
};

export { CaptainProvider, capContext };
