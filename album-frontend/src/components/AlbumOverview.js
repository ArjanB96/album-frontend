import React, { Component } from "react";
import { Card, Grid } from '@material-ui/core';
import AlbumCard from "./AlbumCard";

const albums = [
    {
        id: 1,
        name: "Album 1",
        artist: "Artist 1",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Album 2",
        artist: "Artist 2",
        imageUrl: "https://via.placeholder.com/150"
    },
    {   
        id: 3,
        name: "Album 3",
        artist: "Artist 3",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        name: "Album 4",
        artist: "Artist 4",
        imageUrl: "https://via.placeholder.com/150"
    }
];

// print the id, name, artist and image in the AlbumCard component

class AlbumOverview extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                {albums?.map(album => (
                    <Grid item xs={2} key={album.id}>
                        <AlbumCard {...album} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default AlbumOverview;






