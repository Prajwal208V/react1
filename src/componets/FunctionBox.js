import React, { useState } from 'react';
const para2 = {
  color: "blue",
}
const FunctionBox = () => {
  const [properties, setProperty] = useState("box-none");

  const clickHandler = () => {
    let temp = (properties === "box") ? "box-none" : "box";
    setProperty(temp);
  }
  return (
    <div class="funct-compoent">
      <button className="button" onClick={() => { clickHandler() }}>
        To see styling in functional componet
      </button>
      <div className={properties}>
        <h1 className="box_header" >This is created using functional componet</h1>
        <p className="para1"> This is done using External CSS</p>
        <p style={para2}> This is done using Inline CSS</p>
      </div>
    </div>
  )
}

export default FunctionBox;