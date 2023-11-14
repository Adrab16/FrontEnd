import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

function UpdateManga() {
  const params = useParams();



  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const [manga, setManga] = useState({})
  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')
  const [anneedeparution, setAnneedeParution] = useState('')
  const [description, setDescription] = useState('')


  useEffect(() =>{
    axios.get(`http://localhost:5000/allcatalogue/${params.id}`)
    .then((response) =>{
      // console.log(response.data)
      setLoading(false)
      setError('')
      setManga(response.data)
      setTitre(response.data.nom)
      setAuteur(response.data.nom)
      setAnneedeParution(response.data.nom)
      setDescription(response.data.nom)

    })
    .catch(error =>{
      setLoading(false)
      setError("something went wrong")
      StorageManager({})

    })
  }, [])

  const handleTitreChange = (event) =>{
    setTitre(event.target.value)
  }
  const handleAuteurChange = (event) =>{
    setAuteur(event.target.value)
  }
  const handleAnneedeParutionChange = (event) =>{
    setAnneedeParution(event.target.value)
  }
  const handleDescriptionChange = (event) =>{
    setDescription(event.target.value)
  }









  return (
    <React.Fragment>

  <h1>{loading ? 'loading...' : manga.titre }</h1>
    <h2>{loading ? 'loading...' : manga.auteur }</h2>
    <h2>{loading ? 'loading...' : manga.genre }</h2>
    <h3>{loading ? 'loading...' : manga.anneedeparution }</h3>
    {loading ? 'loading...' : manga.description }






        <form action={`http://localhost:5000/allcatalogue/edit/${params.id}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT" />

        <label for="titre">Titre :</label><br/>
        <input type="text" id="titre" name="titre" required value={titre} onChange={handleTitreChange} />
        <br/>
      
        <label for="auteur">Auteur :</label><br/>
        <input type="text" id="auteur" name="auteur" required value={auteur} onChange={handleAuteurChange} />
        <br/>
      
        <label for="description">Description :</label><br/>
        <input type="text" id="description" name="description" required on value={description} onChange={handleDescriptionChange}  />
        <br/>

        <label for="anneedeparution">Année de Parution :</label><br/>
        <input type="text" id="anneedeparution" name="anneedeparution" required value={anneedeparution} onChange={handleAnneedeParutionChange}  />
        <br/>
      
        <label for="genre">Genre:</label>
        <select id="genre" name="genre" required >
          <option value="Shonen">Shonen</option>
          <option value="Shojo">Shojo</option>
          <option value="Seinen">Seinen</option>
        </select><br/><br/>
      
        <input type="submit" value="Update data" />
      </form>

    <form action={`http://localhost:5000/allcatalogue/delete/${params.id}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE" />



        <input type="submit" name="" id="" value="Supprimer" />
    
    </form>

    </React.Fragment>
  )
}

export default UpdateManga