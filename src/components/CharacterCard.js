import React from "react";
import LocationList from "./LocationsList";
import styled from "styled-components";

const CharacterCardHolder = styled.div `
width:95%;
height:95%;
margin: 3%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #ffff80;
border: 1px #b3fff0 solid;


`;

const TextDiv = styled.div `
  margin:5px;
`;

const BottomDiv = styled.div `
  margin-bottom:10px;
`;

export default function CharacterCard(props) {
  console.log("Character card props: ", props.character)
  return (
    
    <CharacterCardHolder>
      <h2>{props.character.name}</h2>
      <TextDiv>Status: {props.character.status}</TextDiv>
      <TextDiv>Species: {props.character.species}</TextDiv>
      <BottomDiv>Location: {props.character.location.name}</BottomDiv>
            <img src = {props.character.image} />
      
    </CharacterCardHolder>
  )
}
