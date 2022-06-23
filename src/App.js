import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import React from 'react';
import AlbumOverview from './components/AlbumOverview'; 
import Home from './components/Home';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from "./components/CreateAlbum";


function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/albumoverview">AlbumOverview</Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="AlbumOverview/*" element={<AlbumOverview />} />
        <Route path="AlbumDetail/:id" element={<AlbumDetail />} />
        <Route path="/new" element={<CreateAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
