import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import "./styles.js";
import GlobalStyles from './components/globals/GlobalStyles';
import FilmsList from "./components/FilmsList";
import "./styles.js";

export default function App() {
  return (
    <div className="App">
    
      <FilmsList />
    </div>
  );
}
