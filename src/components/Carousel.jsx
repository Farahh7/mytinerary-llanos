import React, { useState,useEffect } from "react";
import Arrow from "../components/Arrow";
import Card from "../components/Card";

export default function Carousel({ data }) {
  const [counter, setCounter] = useState(0);
  const [counterTo, setCounterTo] = useState(4);

  function next_slide() {
    let newCounter = counter + 4;
    let newCounterTo = counterTo + 4;

    if (newCounter >= data.length) {
      newCounter = 0;
      newCounterTo = 4;
    }

    setCounter(newCounter);
    setCounterTo(newCounterTo);
  }

  function prev_slide() {
    let newCounter = counter - 4;
    let newCounterTo = counterTo - 4;

    if (newCounter < 0) {
      newCounter = data.length - 4;
      newCounterTo = data.length;
    }

    setCounter(newCounter);
    setCounterTo(newCounterTo);
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      next_slide()
    }, 5000)

    
    return () => clearInterval(interval)
  })

  return (
    <div className="flex justify-center items-center mt-[20px]
    md:mt-[50px]
    lg:w-1/2 
    lg:mt-0">
      <Arrow direction="left" onClick={prev_slide} />
      
      <div className="flex w-11/12 h-full flex-wrap justify-center"> 
          {data.slice(counter, counterTo).map((each, index) => (
          <Card key={each._id} src={each.photo} alt={each.id} text={each.city}  />
          ))}
        </div>
        
      
      <Arrow direction="right" onClick={next_slide} />
    </div>
  );
}