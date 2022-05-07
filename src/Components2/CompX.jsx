import React from "react";
import CompY from "./CompY";
import CompZ from "./CompZ";

const CompX = () => {
  const info = "My Name is Khan";
  const name = "Rizwan Rafe";
  return (
    <div>
      <CompY data={info} />
      <CompZ data2={name} />
    </div>
  );
};

export default CompX;
