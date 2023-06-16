import React, { Component } from 'react'

export class AdminGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         admin: false,
      }
    }
  render() {
    // return (
    //    this.state.admin ? <div><button>Edit</button></div> : <h1>Veuillez vous connectez </h1>

       let message
       if(this.state.admin)
           message = <div><button>Edit</button></div>
       else
           message = <h1>Veuillez vous connectez</h1>
   
           return message
       
    // )
    
  }
}

export default AdminGreeting