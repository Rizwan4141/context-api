import React, { createContext,useState } from "react";
import CompB from "./CompB";
export const Globalnfo=createContext()
const CompA = () => {
  const [color, setcolor] = useState("red")
  
  return (
    <Globalnfo.Provider value={{appColor:color}}>
    <div>
      <h1>App Components</h1>
      <CompB/>
    </div>
    </Globalnfo.Provider>
  );
};

export default CompA;
