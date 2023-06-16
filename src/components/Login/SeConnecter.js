import React from 'react'

function SeConnecter () {
  return (
    <React.Fragment>
        <h1>Se Connecter</h1>

<form action="http://localhost:5000/api/login" method="POST">
  <div>
    <label for="username">Nom :</label>
    <input type="text" id="nom" name="nom" required />
  </div>

  <div>
    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="motdepasse" required />
  </div>

  <div>
    <button type="submit">Se connecter</button>
  </div>
</form>
    </React.Fragment>
  )
}

export default SeConnecter