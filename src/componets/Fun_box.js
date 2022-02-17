import React from 'react'
const para2={
    color:"blue",
}
const Fun_box = () => {
  return (
    <div className="box">
        <h1 className="box_header" >This is created using functional componet</h1>
        <p className="para1"> This is done using External CSS</p>
        <p style={para2}> This is done using Inline CSS</p>
    </div>
  )
}

export default Fun_box