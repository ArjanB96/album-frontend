import React from "react";
import { Grid } from '@material-ui/core';
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";
import {Card, CardActionArea} from '@material-ui/core';
import {Link} from "react-router-dom";

const AlbumOverview = () => {
    const albums = useAlbums();
    return (
        <div>
        <Grid container spacing={3}>
            {albums.map(album => (
                <Grid item xs={12} sm={6} md={4} key={album.id}>
                    <AlbumCard {...album} />
                </Grid>
            ))}
        </Grid>
        <Card>
                <CardActionArea>
                    <button><Link to="/new">Add Album</Link></button>
                </CardActionArea>
            </Card>
        </div>

    );
}

export default AlbumOverview;






