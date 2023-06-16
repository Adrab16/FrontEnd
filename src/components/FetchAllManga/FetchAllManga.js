import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
// import {GButton} from "../styles/Button.style"
// import {RButton} from "../styles/Button.style"
// import {Button} from "../styles/Button.style"
// import {MyContainer} from "../styles/Div.style"
import { Link } from 'react-router-dom'



function FetchAllManga() {
    const initialState = {
        loading: true,
        error : '',
        manga : {}
    };
    
  const reducer = (state, action) =>{
    switch (action.type){
      case "FETCH_SUCCESS": return {
        loading: false,
        manga: action.payload,
        error: ''
      }
      case "FETCH_ERROR": return {
        loading: false,
        manga: {},
        error: "something went wrong"
      };
      default : return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    axios.get('http://localhost:5000/')
    .then(response =>{
        console.log(response.data);
      dispatch({type: 'FETCH_SUCCESS', payload: response.data});
    })
    .catch(error =>{
      dispatch({type: 'FETCH_ERROR', payload: error})
    });

  }, [])




  return (
    <div>

      {state.loading ? 'loading..' : state.manga.map(manga =>{
        return(
          <React.Fragment>
            <h1>{manga.titre}</h1>
            <h2>{manga.auteur}</h2>
            <h3>{manga.anneedeparution}</h3>
            <p>{manga.description}</p>
            <button><Link to={`/UpdateManga/${manga._id}`}>Editer</Link></button>



          </React.Fragment>
        )
      })  }

{/* <MyContainer>

<GButton>Bouton rouge</GButton>
<RButton>Bouton rouge</RButton>
<Button bgc='blue'>Bouton bleu</Button>
</MyContainer> */}
    </div>
  )
}

export default FetchAllManga