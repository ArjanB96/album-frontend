import React, { Component } from "react";
import { Card, Grid } from '@material-ui/core';
import AlbumCard from "./AlbumCard";

const AlbumOverview = ({ albums }) => {
    return (
        <div>
            {albums.map(album => (
                <Grid item xs={12} sm={6} md={4} key={album.id}>
                    <AlbumCard {...album} />
                </Grid>
            ))}
        </div>
    );
}
export default AlbumOverview;


