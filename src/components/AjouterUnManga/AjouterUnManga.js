import React, {useState} from 'react'
import axios from 'axios';

import './AjouterUnManga.css';


function AjouterUnManga() {
  const [image, setImage] = useState(null); // État local pour stocker l'image
  const [formData, setFormData] = useState({
    titre: '',
    auteur: '',
    anneedeparution: '',
    genre: '',
    description: '',
  });

  // Gérer le changement de l'image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Gérer le changement des autres champs du formulaire
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSubmit = FormData();
    formDataToSubmit.append('titre', formData.titre);
    formDataToSubmit.append('auteur', formData.auteur);
    formDataToSubmit.append('anneedeparution', formData.anneedeparution);
    formDataToSubmit.append('genre', formData.genre);
    formDataToSubmit.append('description', formData.description);
    formDataToSubmit.append('image', image); // Ajoutez l'image à FormData

    try {
      await axios.post('http://localhost:5000/submit-ajouterunmanga', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Réinitialisez les champs du formulaire après la soumission réussie
      setFormData({
        titre: '',
        auteur: '',
        anneedeparution: '',
        genre: '',
        description: '',
      });
      setImage(null);

      alert('Manga ajouté avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du manga:', error);
    }
  };
  return (
<React.Fragment>

    <h2>Ajouter un manga</h2>
    <form action="http://localhost:5000/submit-ajouterunmanga" method="post">
      <label htmlFor="titre">Titre:</label>
      <input type="text" id="titre" name="titre" required /><br/><br/>
      
      <label htmlFor="auteur">Auteur:</label>
      <input type="text" id="auteur" name="auteur" required /><br/><br/>
  
      <label htmlFor="anneedeparution">Année de Parution:</label>
      <input type="text" id="anneedeparution" name="anneedeparution" required /><br/><br/>
      
      <label htmlFor="genre">Genre:</label>
      <select id="genre" name="genre" required>
        <option value="Shonen">Shonen</option>
        <option value="Shojo">Shojo</option>
        <option value="Seinen">Seinen</option>
      </select><br/><br/>
      
      <label htmlFor="description">Description:</label><br/>
      <textarea id="description" name="description" rows="4" cols="50" required></textarea><br/><br/>

      <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /><br /><br />

        {/* Aperçu de l'image */}


      
      <input type="submit" value="Ajouter" />
    </form>
</React.Fragment>

   
  )
}

export default AjouterUnManga

