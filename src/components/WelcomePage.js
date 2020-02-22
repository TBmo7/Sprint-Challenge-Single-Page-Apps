import React from "react";
import styled from "styled-components";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import {Route,Link} from "react-router-dom";
import SearchForm from "./SearchForm";

const WelcomeContainer = styled.div `
    width:95%;
    margin:5%;
    height:60px;
    display:flex;

    justify-content:space-around;
    align-items:center;
    background-color:#b3fff0
    

`;
const ButtonContainer = styled.div `
  width:95%;
  margin:5%;
  display:flex;
  justify-content:center;
  align-items:center;

`;


const WelcomeButton = styled.button `
    height:80%;


`;

export default function WelcomePage() {
  
  return (
    <WelcomeContainer>
      
      <WelcomeButton>
        <Link to = "/">Characters</Link>
        </WelcomeButton>
        
      
      <WelcomeButton>
      <Link to = "/LocationsList">Locations</Link>
      </WelcomeButton>
      
     
      <WelcomeButton>
      <Link to = "/EpisodesList">Episodes</Link>
      </WelcomeButton>

      <WelcomeButton>
      <Link to = "/SearchForm">Search</Link>
      </WelcomeButton>
      
            
    </WelcomeContainer>
    
    
    
  );
  
}
