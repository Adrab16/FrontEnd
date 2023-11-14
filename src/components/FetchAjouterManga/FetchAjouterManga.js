// import React, {useEffect, useState} from'react'
// import axios from 'axios'

// function FetchAjouterManga() {
    
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
//     const [AjouterUnManga, setAjouterUnManga] = useState({})

//     useEffect(() =>{
//         axios.get('http://localhost:3000/ajouterunmanga/648038a9f871b0dd04b359eb')
//         .then((response) =>{
//             setLoading(false)
//             setError('')
//             setAjouterUnManga(response.data)
//         })
//         .catch((error) =>{
//             setLoading(false)
//             setError('Something went wrong')
//             setAjouterUnManga({})

//         })
//     })




//   return (
//     <div>
//         {loading ? 'loading...' : AjouterUnManga.titre}
//         {loading ? 'loading...' : AjouterUnManga.auteur}
//         {loading ? 'loading...' : AjouterUnManga.anneedeparution}
//         {loading ? 'loading...' : AjouterUnManga.description}



//     </div>
//   )
// }

// export default FetchAjouterManga