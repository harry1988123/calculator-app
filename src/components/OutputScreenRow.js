import React from "react";
import { Input } from "antd";

const OutputScreenRow = ({ value, placeholder }) => {
  return (
    <div className="screen-row">
      <Input type="text" readOnly value={value} placeholder={placeholder} />
    </div>
  );
};

export default OutputScreenRow;
