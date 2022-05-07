import React, { useContext } from "react";
import { Globalnfo } from "./Main";

const OtherChild = () => {
  const { appColor } = useContext(Globalnfo);
  return (
    <div>
      <h1 style={{ color: appColor }}>Other Child </h1>
    </div>
  );
};

export default OtherChild;
