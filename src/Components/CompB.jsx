import React, { useContext } from "react";
import { Globalnfo } from "./CompA";
import CompC from "./CompC";


const CompB = () => {
  const {appColor}=useContext(Globalnfo)
  // console.warn("===>",appColor)
  return (
    <div>
     <h2 style={{color:"red"}}>Components B</h2>
     <CompC/>
    </div>
  );
};

export default CompB;
