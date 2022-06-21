import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import React from 'react';
import AlbumOverview from './components/AlbumOverview'; 
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Link to="">Home</Link>
          <Link to="/albumoverview">AlbumOverview</Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="AlbumOverview" element={<AlbumOverview />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
