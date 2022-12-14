import React, {Component} from "react";
import styled from "styled-components"; // višak
import PropTypes from 'prop-types'; // višak
import "./styles.js";
import GlobalStyles from './components/globals/GlobalStyles'; // višak
import FilmsList from "./components/FilmsList";
import "./styles.js";

export default function App() {
  return (
    <div className="App">
    
      <FilmsList />
    </div>
  );
}
