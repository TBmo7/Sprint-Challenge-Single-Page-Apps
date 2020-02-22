import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";


const CharacterListDiv = styled.div `
  width:95%;
  height:95%;
  margin: 3%;
  border: 1px #29899e solid;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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

  return (
    
    <CharacterListDiv>
    
      {characters.map(character=>(
        <CharacterCard key = {character.id} character = {character} />
      ))}
    </CharacterListDiv>
  );
}
