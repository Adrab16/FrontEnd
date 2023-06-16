import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // if(this.state.isLoggedIn)
    // return (
    //   <div>Welcome Moi !</div>
    // )
    
    // else
    //    return <div>Welcome Racaille !</div>

    //ternaire

    // return this.state.isLoggenIn ? (<div>Welcome Fred</div>) : (<div>Welcome Racaille !</div>)
    //circuit court

    // return this.state.isLoggedIn && (<div>Welcome Moi</div>)
    // variable intermediare
    let message
    if(this.state.inLoggedIn)
        message = <div>Welcome Moi</div>
    else
        message = <div>Welcome Guest</div>

        return message
    
  
  
  }
}

export default UserGreeting