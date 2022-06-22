import { Link } from "react-router-dom";
import React, { } from "react";
import useAlbum from "../hooks/useAlbum";
import { useParams } from 'react-router-dom';

const AlbumDetail = ( props ) => {
    const { id } = useParams();
    const album = useAlbum(id);
    return (
        <div>
        <h1>AlbumDetail</h1>
        <div>
            <h2>{album.name}</h2>
            <p>{album.artist}</p>
            <img src={album.imageUrl} alt={album.name} />
        </div>
        <Link to="/albumoverview">AlbumOverview</Link>
        </div>
    );
    }
export default AlbumDetail;

