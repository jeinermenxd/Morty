import imagenastroshoes from './img/LOGOTIPO.png';
import './App.css';
import { useState } from 'react';
import Charactes from './components/Charactes';


function App() {
  const [characters,setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>
        {characters ? (
           <Charactes characters={characters} setCharacters={setCharacters}/>
        ):
        <>
        <img src={imagenastroshoes} alt="ASTROSHOES" className="img-home"></img>
        <button onClick={reqApi}  className="btn-search" class="btn btn-primary">Buscar Zapatos</button>
        </>
        }
      </header>
    </div>
  );
}

export default App;
