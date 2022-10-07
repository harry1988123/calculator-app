import React, { useState } from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import { Button } from "antd";
import History from "./History";

const Calculator = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  const keyButtons = [
    ["Clear", "Delete", ".", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "="],
  ];

  const columns = [
    {
      title: "Operation",
      key: "question",
      dataIndex: "question",
    },
    {
      title: "Answer",
      key: "ans",
      dataIndex: "ans",
    },
  ];

  const handleClick = (event) => {
    let value = event.target?.attributes?.label?.value;
    if (value === undefined) {
      value = event.target.innerHTML;
    }
    switch (value) {
      case "=": {
        if (question !== "") {
          var ans = "";
          try {
            // eslint-disable-next-line no-eval
            ans = eval(question);
          } catch (err) {
            setAnswer("Math error");
          }
          if (ans === undefined) {
            setAnswer("Math error");
          } else {
            setAnswer(ans);
            setHistory((prev) => {
              console.log(prev);
              return [...prev, { question, ans }];
            });
            setQuestion("");
          }
          break;
        }
      }
      // eslint-disable-next-line no-fallthrough
      case "Clear": {
        setAnswer("");
        setQuestion("");
        break;
      }
      case "Delete": {
        var str = question;
        str = str.substr(0, str.length - 1);
        setQuestion(str);
        break;
      }
      default: {
        const temp = question + value;
        setQuestion(temp);
        break;
      }
    }
  };

  return (
    <div className="frame">
      <CalculatorTitle value="Symbio Calculator" />
      <OutputScreen answer={answer} question={question} />

      <div className="keyPad">
        {keyButtons.map((row, i) => {
          return (
            <div className="button-row" key={i}>
              {row.map((item, j) => {
                return (
                  <Button
                    label={item}
                    className="key-button"
                    type="primary"
                    onClick={handleClick}
                    key={i + j}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      {history.length !== 0 && <History history={history} columns={columns} />}
    </div>
  );
};

export default Calculator;
