import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
         
      }
    }

    increment(){
        this.setState((prevState)=>({
            count: prevState.count +1 
        }))
        console.log(this.state.count);
    }

    decrement(){
        this.setState((prevState)=>({
            count: prevState.count -1
        }))
        console.log(this.state.count);
    }

    incrementProps(){
        this.setState((prevState)=>({
            count: prevState.count +100 
        }))

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}> +1</button>
        <button onClick={()=>this.incrementFive()}> +5</button>
        <button onClick={()=>this.decrement()}> -1</button>
        <button onClick={()=>this.incrementProps()}> +{this.props.value}</button>



      </div>
    )
  }
}

export default Counter