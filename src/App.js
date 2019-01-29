import React, { Component } from 'react';
import Pad from './Pad.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      targetSeq: ['red', 'yellow','blue','yellow'],
     step: 0 
    }
  }

  genColor(){
  const colors = ['green', 'blue', 'yellow', 'red']
  const magicNumber = Math.floor(Math.random() * colors.length)
  return colors[magicNumber]
  }
  rainbowArray(n){
    const colorfulArray = [] 
    for (let a=0; a < n; a++){
    colorfulArray.push(this.genColor())
  }
    
      return colorfulArray
  }
  
  handleClick(event){ 
    // const targetPad = this.state.targetSeq[this.state.step]  
    // if (event !== targetPad)  {
    //   console.log("you lose!!!")
    // }    
    console.log(this.state.step, this.state.targetSeq.length)
    if (this.state.step === this.state.targetSeq.length -1) {
console.log("last step passed?")
      
      const newTargetSeq = this.rainbowArray(this.state.targetSeq.length + 1 )
      this.setState({
        targetSeq: newTargetSeq,
        step: 0

      })
    } else {
      this.setState((prevState)=>{
        return {
          step: prevState.step + 1
        }
      })
    }

  }
  render() {
    // console.log(this.state.targetSeq)
    // console.log(this.state.step)
    return (
      <div className="App">
        <Pad ofColour='green' clickProp={this.handleClick}/> 
        <Pad ofColour='red' clickProp={this.handleClick}/> 
        <Pad ofColour='yellow' clickProp={this.handleClick}/>
        <Pad ofColour='blue' clickProp={this.handleClick}/>
      </div>
    );
  }
}

export default App;
