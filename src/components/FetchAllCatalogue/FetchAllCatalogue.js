import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './FetchAllCatalogue.css';



function FetchAllCatalogue() {
  const initialState = {
    loading: true,
    error: '',
    mangas: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          mangas: action.payload,
          error: '',
        };
      case 'FETCH_ERROR':
        return {
          loading: false,
          mangas: [],
          error: 'Something went wrong',
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('http://localhost:5000/allcatalogue')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []); // Tableau de dépendances vide pour exécuter l'effet une seule fois

  return (
    <div>

      {state.loading ? (
        'Loading...'
      ) : (
        state.mangas.map((manga) => (
            <React.Fragment>

          <div key={manga._id}>
            <h1>{manga.titre}</h1>
            <h3>{manga.auteur}</h3>
            <h3>{manga.genre}</h3>
            <h3>{manga.anneedeparution}</h3>
            <p>{manga.description}</p>
            <button><Link to={`/UpdateManga/${manga._id}`}>Editer</Link></button>

          </div>

          </React.Fragment>

        ))
      )}
      {state.error && <p>{state.error}</p>}

      
    </div>
  );
}

export default FetchAllCatalogue;