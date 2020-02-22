import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";
import SearchForm from "./components/SearchForm";

import {Route} from "react-router-dom";
import styled from "styled-components";


const MainHolder = styled.main `
  background-color:#ccd9ff

`;

export default function App() {
  return (
    <MainHolder>
      <Header />
      <WelcomePage/>
      
      <Route
      path = '/'
      exact component = {CharacterList} />
      <Route
      path = '/LocationsList'
      component = {LocationsList}/>
      <Route
      path = "/EpisodesList"
      component = {EpisodesList}/>
      <Route
      path = "/SearchForm"
      component = {SearchForm}/>
      
    </MainHolder>
  );
}
