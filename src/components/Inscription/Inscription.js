import React from 'react';
import './Inscription.css';

function Inscription() {
  return (
    <React.Fragment>
            <h1>Inscription</h1>

        <form action="http://localhost:5000/submit-inscription" method="post">
        Nom : <input type="text" name ="nom" />
        <br/>
        Prénom : <input type="text" name ="prenom" />
        <br/>
        Email : <input type="email" name ="email" />
        <br/>
        Mot de Passe : <input type="password" name ="motdepasse" />
        <br/>
        <input type="submit" value="Envoyer" />
    </form>
    
    </React.Fragment>
  )
}

export default Inscription