
export default function Charactes(props) {
    const {characters,setCharacters}= props ;
    

    const resetCharacters = () =>{
        setCharacters(null);
    }
  return (
    <div className="characters">
    <h1>PERSONAJES</h1>
   
    <button onClick={resetCharacters}  class="btn btn-primary mb-3">Volver a casa</button>
    <div className="container-characters" >
        {characters.map((characters,index)=> (
            <div style={{display:'flex',justifyContent:'center'}} className="characters-container" key= {index} >
            <div class="card mb-3 w-75 col-sm-30" style={{width: '15rem'}}  > 
            <img src={characters.image} class="card-img-top" alt="{characters.name}"/>
            <div class="card-body">
            <h5 class="card-title" style={{color : "black"}}>{characters.name}</h5>
            <h5 class="card-title"style={{color : "black"}}>{characters.status === "Alive" ? (
                <>
                <span className="Alive"/>
                Alive
                </>
             ):(
                <>
                <span className="dead"/>
                Dead
                </>
             )}
             </h5>
             <p style={{color : "black"}} >
                <span className="text-grey">Episodios:</span>
                <span>{characters.episode.length}</span>
                </p>
                <p style={{color : "black"}}>
                    <span className="text-grey">Especies:</span>
                    <span>{characters.species}</span>
                </p>
                </div>
                </div>
                </div>
        )) 
        
        }
    
    </div>
    <button onClick={resetCharacters}  class="btn btn-primary mb-3">Volver a casa</button>

    </div>
  )
}
