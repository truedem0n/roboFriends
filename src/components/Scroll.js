import React from "react"

const Scroll=(props)=>{
return(
    <div style={{height:"69.59vh",overflowY:"scroll"}}>
        {props.children}
    </div>
);
}

export default Scroll