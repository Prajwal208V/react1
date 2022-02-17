import React from 'react';
const para2={
    color:"blue",
    fontSize:"1.1rem"
}
class Cls_btn extends React.Component { 
    render() {  
        return( 
            <div className="box cls_box">
                <h1 className="box_header">This is created using class componet</h1>
                <p className="para1"> This is done using External CSS</p>
                <p  style={para2}> This is done using Inline CSS</p>
            </div>
        )
    } 
}
export default Cls_btn;