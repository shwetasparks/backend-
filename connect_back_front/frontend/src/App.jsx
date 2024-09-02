import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

//added proxy in vite.config to remove cors error

function App() {
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  
  return (
    <div>
      <h1>Jokes</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((jokes,index)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default App
