import React, { Component } from 'react';
import Pad from './Pad.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      targetSeq: ['red', 'yellow','blue','yellow'],
      step: 0,
      playerTime: false
    }
  }

  componentDidMount(){
    this.gameLoop()
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
       
      // 
      // to-do wrong note handling...
      //
      //if the last note of the simon game has been played...
      if (this.state.step === this.state.targetSeq.length -1) {
        //set new state with new sequence of colours (obviosly with one note more)
        const newTargetSeq = this.rainbowArray(this.state.targetSeq.length + 1 )
        this.setState({
          targetSeq: newTargetSeq,
          step: 0,
          playerTime: false
        })
        this.playSeq()
        //otherwise... carry on with next step
      } else {
        this.setState((prevState)=>{
          return {
            step: prevState.step + 1
          }
        })
      }
      }

  playSeq(){
    this.playing = setInterval(()=>{
      if (this.state.step !== this.state.targetSeq.length ){
        console.log(this.state.targetSeq[this.state.step],this.state.step)
        this.setState((prevState)=>{
          return {
            step: prevState.step + 1
          }
        })
      } else {
        clearInterval(this.playing)
        this.setState({playerTime:true,
          step:0
        })
      }

    },500)
  }


  gameLoop(){
    this.playSeq() 

  }

  render() {


    console.log(this.state.targetSeq)
    console.log(this.state.step)
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
