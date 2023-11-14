import React from 'react'


import './styles/person.css'


function Person() {
const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }

  ]


  const personList = persons.map((person) => (
    person.name === 'Diana' ? 
  <h2 className='Diana'>Je suis {person.name}. J'ai {person.age} ans. Je connais {person.skill}</h2>
  :
  <h2 className='primary'>Je suis {person.name}. J'ai {person.age} ans. Je connais {person.skill}</h2>

  ))

  
  
  
  return (
    <div>{personList}</div>
  )
}
  export default Person

