import { Link } from "react-router-dom";
import React, { } from "react";
import useAlbum from "../hooks/useAlbum";
import { useParams } from 'react-router';
import AlbumForm from "./AlbumForm";

const AlbumDetail = () => {

    const { id } = useParams();
    const album = useAlbum(id);
    const albumform = AlbumForm(album);
    return (
        <div>
        <div>
            <h2>Artist: {album.artist}</h2>
            <h2>Album: {album.name}</h2>
            <img src={album.imageUrl} alt={album.name} />
            <h2>{albumform}</h2>
        </div>
        <Link to="/albumoverview">AlbumOverview</Link>
        </div>
        
    );
    }
export default AlbumDetail;

