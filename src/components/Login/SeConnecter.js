import React from 'react'

function SeConnecter () {
  return (
    <React.Fragment>
        <h1>Se Connecter</h1>

<form action="http://localhost:5000/api/login" method="POST">
  <div>
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required />
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