import {useEffect, useState} from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./style.scss";

function WhatIDo () {
  let data = require("./data.json").data;
  let [waiting, setWaiting] = useState(false);
  let [counter, setCounter] = useState(
    0
  );

  useEffect( () => {
    async function increment() {
      setWaiting(true);
      await new Promise(r => setTimeout(r, 2000));
      setWaiting(false);
      let incremented = counter + 1 >= data.length
        ? 0 : counter + 1;
      setCounter(incremented);
    }

    increment();
  }, [counter, data.length]);
  
  return (
    <div className="what-i-do">
      <LeftSection waiting={waiting} allData={data} counter={counter}/>
      <RightSection waiting={waiting} allData={data} counter={counter} />
    </div>
  )
}

export default WhatIDo;

