import React from 'react'

function AjouterUnManga() {
  return (
<React.Fragment>

    <h2>Ajouter un manga</h2>
    <form action="http://localhost:5000/submit-ajouterunmanga" method="post">
      <label for="titre">Titre:</label>
      <input type="text" id="titre" name="titre" required /><br/><br/>
      
      <label for="auteur">Auteur:</label>
      <input type="text" id="auteur" name="auteur" required /><br/><br/>
  
      <label for="anneedeparution">Année de Parution:</label>
      <input type="text" id="anneedeparution" name="anneedeparution" required /><br/><br/>
      
      <label for="genre">Genre:</label>
      <select id="genre" name="genre" required>
        <option value="Action">Shonen</option>
        <option value="Aventure">Shojo</option>
        <option value="Comédie">Seinen</option>
      </select><br/><br/>
      
      <label for="description">Description:</label><br/>
      <textarea id="description" name="description" rows="4" cols="50" required></textarea><br/><br/>
      
      <input type="submit" value="Ajouter" />
    </form>
</React.Fragment>

   
  )
}

export default AjouterUnManga