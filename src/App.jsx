
import './App.css'
import { useState } from 'react'
import { puppyList } from "./data.js"

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log('puppyList: ', puppyList)


  const handlePuppyClick = (id) => {
    setFeatPupId(id);
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div className='App'>
        {puppies.map((puppy)=> {
          return (
            <p className='pup-names' onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          )
        })
        }

    {featPupId && (
      <div className='pup-info'>
        <h2 className='pup-header'>{featuredPup.name}</h2>
        <ul className='u-list'>
          <li className='age'>Age: {featuredPup.age}</li>
          <li className='email'>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )} 

      </div>
     
    </>
  )
}

export default App
