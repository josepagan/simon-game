import React from 'react'
  

function Pad(props){
  return(
    <div onClick={()=>{props.clickProp(props.ofColour)}} className="pads" style={{backgroundColor: props.ofColour}}>
      {props.ofColour}
    </div>
  )
}
export default Pad
