import React from 'react'
  

function Pad(props){
  let padStyle = {}
  if (props.isPlaying === props.ofColour){
    padStyle.backgroundColor =  props.whenLit
  } else {
    padStyle.backgroundColor = props.ofColour
  } 
  
  return(
    <div onClick={()=>{props.clickProp(props.ofColour)}} 
      className="pads" 
      style={padStyle}>
      {props.ofColour}
    </div>
  )
}
export default Pad
