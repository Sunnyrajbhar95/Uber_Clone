import { createContext, useState } from "react";

const contextApi = createContext();

const ContextProvider = ({ children }) => {
  const [userdata, setuserdata] = useState({});
  console.log(userdata,"fromt context Api")

  return (
    <contextApi.Provider value={{ userdata, setuserdata }}>
      {children}
    </contextApi.Provider>
  );
};

export { ContextProvider, contextApi };
