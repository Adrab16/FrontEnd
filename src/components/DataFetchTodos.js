import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./styles/DataFetchTodos.css"


function DataFetchTodos() {
    const [loading, setLoading] = useState(true)
    const [error, setError ] = useState('')
    const [todos, setTodos] = useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) =>{
            setLoading(false)
            setError('')
            setTodos(response.data)
        })
        .catch((error) =>{
            setLoading(false)
            setError('Something went wrong')
            setTodos({})
        });
    })




  return (
    <div>
         {loading ? 'loading...' : todos.map((todo, index) =>{

           return(
              <React.Fragment key={index}>
                {todo.competed ?
                    <div className='bg-green'>
                        <h1>{todo.title}</h1>
                        <h2>{todo.userId}</h2>
                        <h3>Etat completed</h3>

                    </div>
                    :
                    <div className='bg-red'>
                        <h1>{todo.title}</h1>
                        <h2>{todo.userId}</h2>
                        <h3>Etat not completed</h3>

                    </div>
               }    


                
       
    </React.Fragment>
)
})}
    </div>
  )
}

export default DataFetchTodos