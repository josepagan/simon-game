import React, { Component } from 'react';
import Pad from './Pad.js'
import './App.css';
import Tone from 'tone'

class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      targetSeq: ['navy'],
      step: 0,
      sequencerStep:0,
      nowPlaying:null
      
    }
  }

  componentDidMount(){
    this.playSeq()
  }
  genColor(){
  const colors = ['darkgreen', 'navy', 'olive', 'darkred']
  const magicNumber = Math.floor(Math.random() * colors.length)
  return colors[magicNumber]
  }
  // rainbowArray(n){
  //   const colorfulArray = [] 
  //   for (let a=0; a < n; a++){
  //   colorfulArray.push(this.genColor())
  // }
    
      // return colorfulArray
  // }
  gameOver(){
    console.log('GAMEOVERGAMEOVERGAMEOVER')
    this.setState({
      targetSeq: ['blue'],
      step: 0,
      sequencerStep:0
    }) 
  } 
  handleClick(event){ 
   if (event !== this.state.targetSeq[this.state.step]){this.gameOver()}
    // if (event !== targetPad)  {
    //   console.log("you lose!!!")
    // }    
     console.log(this.state.step, this.state.targetSeq)
    if (this.state.step === this.state.targetSeq.length -1) {

    this.setState((state)=>{
      const nextColor = this.genColor() 
      state.targetSeq.push(nextColor)
      return {
        targetSeq: state.targetSeq,
        step: 0,
        sequencerStep: 0
        
      } 
    })
      this.playSeq()
      
    } else {
      this.setState((prevState)=>{
        return {
          step: prevState.step + 1
        }
      })
    }

  }


  playSeq(){
    this.play = setInterval(()=>{
      if (this.state.sequencerStep  <  this.state.targetSeq.length  ){

        this.playNotes(this.state.targetSeq[this.state.sequencerStep])
        this.setState({nowPlaying:this.state.targetSeq[this.state.sequencerStep]}) 
        // console.log(this.state.targetSeq[this.state.step])
        this.setState((prevState)=>{
          return { 
            sequencerStep:prevState.sequencerStep + 1
          }
          
        })
      } else {
        // this.setState({sequencerStep:0})
        clearInterval(this.play)
      }

    },500)
  }

  playNotes(color){ //must put some args i guess colour
    const sounds = {
      darkgreen: "C4",
      darkred:"D4",
      olive:"E4",
      navy:"F4"
    }
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(sounds[color], "8n")
  }

  render() {
    // console.log(this.state.targetSeq)
     console.log("now playing", this.state.nowPlaying)
    return (
      <div className="App">
        <Pad ofColour='darkgreen' whenLit="green" clickProp={this.handleClick} isPlaying={this.state.isPlaying}/> 
        <Pad ofColour='darkred' whenLit="red" clickProp={this.handleClick} isPlaying={this.state.isPlaying}/> 
        <Pad ofColour='olive' whenLit="yellow" clickProp={this.handleClick} isPlaying={this.state.isPlaying}/>
        <Pad ofColour='navy' whenLit="blue" clickProp={this.handleClick} isPlaying={this.state.isPlaying}/>
      </div>
    );
  }
}

export default App;
