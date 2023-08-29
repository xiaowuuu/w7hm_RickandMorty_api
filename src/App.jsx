import { useState, useEffect } from 'react'
import './App.css'
import CharacterList from './components/CharacterList'

function App() {
  const [characters, setCharacters] = useState([])
  //fetch data
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }, [])


//character list
return (
  <CharacterList/>
)

}
export default App
