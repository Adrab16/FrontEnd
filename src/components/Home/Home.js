import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
// import {Button} from "../styles/Button.style"




function Home() {
  const initialState = {
    loading: true,
    error: '',
    AjouterUnManga: {}
  };

  const reducer = (state, action) =>{
    switch (action.type){
      case "FETCH_SUCCESS": return {
        loading: false,
        AjouterUnManga: action.payload,
        error: ''

      }
      case "FETCH_ERROR": return {
        loading: false,
        AjouterUnManga: {},
        error: "something went wrong"
      };
      default : return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() =>{
    axios.get('http://localhost:5000/')
    .then(response =>{
      dispatch({type: 'FETCH_SUCCESS' , payload: response.data})
    })
    .catch(error =>{
      dispatch({type: 'FETCH_ERROR' , payload: error})

    })

  }, [])
  



  return (
    <div>
        <React.Fragment>
        {/* <Navbar /> */}

        
        Bienvenue sur mon site de manga !
        Voici la liste des mangas disponibles :

        {/* <Button>Test</Button>  */}







        {state.loading ? 'loading...' : state.AjouterUnManga.map(AjouterUnManga =>{
          return(
            <di>
              <h1>{AjouterUnManga.titre}</h1>
              <p>{AjouterUnManga.auteur}</p>
              <p>{AjouterUnManga.anneedeparution}</p>
              <p>{AjouterUnManga.description}</p>

              



            </di>

          )

          

          

        })}


        </React.Fragment>

    </div>
  )
}

export default Home