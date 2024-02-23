import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import axios from 'axios';
import Header from './components/Header/header.jsx';
// import Search from 'components/Search';
// import Details from 'components/DetailsView/Details';
// import GridContainer from 'components/GridView/GridContainer';
// import List from 'components/ListView/PokemonList';
import PropTypes from 'prop-types';

function App(props) {

  App.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
    setTypeFilter: PropTypes.func.isRequired,
  };

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;