import React, { useState } from 'react';
const para2 = {
  color: "blue",
}
const InsideBox=()=>{
    return(
      <div className="box">
        <h1 className="box_header" >This is created using functional componet</h1>
        <p className="para1"> This is done using External CSS</p>
        <p style={para2}> This is done using Inline CSS</p>
      </div>
    )
}
const FunctionBox = () => {
  const [properties, setProperty] = useState("box-none");
  const clickHandler = () => {
    let temp = (properties === "box") ? "box-none" : "box";
    setProperty(temp);
  }
  if(properties==="box"){
    return (
      <div class="funct-compoent">
        <button className="button" onClick={() => { clickHandler() }}>
          To see styling in functional componet
        </button>
          <InsideBox />
      </div>
    )
  }
  else{
    return(
      <div class="funct-compoent">
          <button className="button" onClick={() => { clickHandler() }}>
            To see styling in functional componet
          </button>
      </div>
    )
  }
  
}

export default FunctionBox;