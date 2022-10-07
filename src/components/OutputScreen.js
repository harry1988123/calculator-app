import React from "react";
import OutputScreenRow from "./OutputScreenRow";

const OutputScreen = ({ question, answer }) => {
  return (
    <div className="screen">
      <OutputScreenRow value={question} placeholder={"Enter the number"} />
      <OutputScreenRow value={answer} placeholder={"Answer"} />
    </div>
  );
};

export default OutputScreen;
