import React, { Component } from 'react'
import './styles/newsletter.css'

class Newsletter extends Component {
    
    
    constructor(props){
        super(props)

        this.state = {
            nom : '',
            prenom : '',
            email : '',



        }
    }

    handleNomChange = event => {
        this.setState({ nom : event.target.value})

    };

    handlePrenomChange = event => {
        console.log(event.target);
        if(event.target.value.length < 3){
            event.targer.className = "borderRouge"

        }
        else{
            event.targer.className = "borderVert"


        }
        this.setState({ prenom : event.target.value})

    };

    handleEmailChange = event => {
        this.setState({ email : event.target.value})

    };

    handleSubmit = event => {
        alert(`Merci, ${this.state.nom} ${this.state.prenom} d'avoir pris en contact avec nous. Nous reviendrons vers vous a cet adresse mail : ${this.state.email}`)
        event.preventDefault();

    };



  render() {
        const {nom, prenom, email} = this.state
    return (
        

        <form onSubmit={this.handleSubmit}>
            
        <div>
            <label>Nom </label>
            <input
                type="text" 
                value={nom}
                onChange={this.handleNomChange}
                
            />
        </div>
        <div>
            <label>Prenom</label>
            <input
            type="text" 
            value={prenom}
            onChange={this.handlePrenomChange}

                
           />    
        </div>
        <div>
            <label>Email</label> 
            <input
            type="email"
            value={email} 
            onChange={this.handleEmailChange}>

            </input>
        </div>

        <button type="submit">Submit</button>
    </form>
    )
  }
}

export default Newsletter

