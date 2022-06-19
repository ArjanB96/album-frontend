import logo from './logo.svg';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import React from 'react';
import AlbumOverview from './components/AlbumOverview'; 



function App() {
  return (
    <BrowserRouter basename="/index.html">
      <AppBar position="static">
        <Toolbar>
          <Link to="/about">AlbumOverview</Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="AlbumOverview" element={<AlbumOverview />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
