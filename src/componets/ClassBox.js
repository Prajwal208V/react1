import React,{Component} from 'react';
const para2={
    color:"blue",
    fontSize:"1.1rem"
}
class ClassBox extends Component { 
    state={
        displayProp:"box-none",
    }
    clickHandler(){
       let property=(this.state.displayProp ==='box') ? "box-none" : "box";
       this.setState(
            {displayProp:property},
       );
    }

    render() {  
        return(
        <div class="class-compoent">
            <button className="button" onClick={()=>{this.clickHandler()}}>To see styling in class componet</button>
            <div className={this.state.displayProp} id="cls_box">
                <h1 className="box_header">This is created using class componet</h1>
                <p className="para1"> This is done using External CSS</p>
                <p  style={para2}> This is done using Inline CSS</p>
            </div>
        </div>
        )
    } 
}
export default ClassBox;