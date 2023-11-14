import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ApiFilm() {
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const[film, setFilm] = useState({})  
    const [nom, setNom] = useState('')

    useEffect(() =>{
        axios.get(`http://www.omdbapi.com/?t=${nom}apikey=18aa403a`)
        .then((response) =>{
            setLoading(false)
            setFilm(response.data)
            setError('')
        })
        .catch((error) =>{
            setLoading(false)
            setFilm({})
            setError()
        })
    })

    const handleInputChange = event =>{
        setNom(event.target.value)

    }
    
    
    return (
        <React.Fragment>
    
        <input type='text' placeholder='Entrez un film' onChange={handleInputChange}/>
        <br />
        Titre du film : <h1>{loading ? 'loading...' : film.Title}</h1>
        poster du film : <p>{loading ? 'loading...' : film.Poster}</p>
        Année du film : <p>{loading ? 'loading...' : film.Year}</p>
        BoxOffice du film : <p>{loading ? 'loading...' : film.BoxOffice}</p>

        {error ? error : 'null'}

        </React.Fragment>



    
  )
}

export default ApiFilm