import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function SearchForm() {

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {    
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      console.log("Response character data ", response)
      setCharacters(response.data.results);
      
      //TODO ADD FUNCTION HERE
    })
    .catch(error =>console.log(error));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }
    getCharacters();
  
  }, []);

  console.log(characters);

  //  var charArray = [];
  //  characters.map(index=>{
  //    charArray.push(index.data.results.name)
  //  })

  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

   useEffect(()=>{
    setSearchResults(characters.filter((characters)=>{
     characters.name.toLowerCase().includes(searchTerm.toLowerCase())
   }));
   //setSearchResults(results);
  }, [searchTerm])

  const handleChange = event => {
  setSearchTerm(event.target.value)
  console.log(event.target.value);
  console.log("Search Term ", searchTerm);
  };
  
   console.log(searchResults);
  return (
    <div>
      <form>
        <label htmlFor = "name">Search: </label>
        <input 
        id = "name" 
        type = "text" 
        name = "textfield" 
        placeholder = "Search" 
        value = {searchTerm} 
        onChange = {handleChange} />

      </form>
      <ul>
        {searchResults.map(characters =>{
          return <CharacterCard key = {characters.id} name = {characters.name} />;
          
        })}
        
      </ul>


    </div>
    
  );
}
