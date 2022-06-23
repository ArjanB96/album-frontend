import { Card, CardContent, TextField } from '@material-ui/core'; 
import { Button } from '@material-ui/core';
import { useState } from 'react';
import {Link } from "react-router-dom";

const AlbumForm = ( ) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/Albums/`;
    const [album] = useState([]);
    const [Artist, setArtist] = useState(album.Artist || '');
    const [Name, setName] = useState(album.Name || '');
    const [ImageUrl, setImageUrl] = useState(album.ImageUrl || '');
    const [Id, setId] = useState(album.Id || '');
    const onSubmit = (e) => {
        const newAlbum = {
            Artist: Artist,
            Name: Name,
            ImageUrl: ImageUrl,
            Id: Id
        };
        handleSubmit(newAlbum);
    }
    const handleSubmit =  (newAlbum) => {
        const request = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {"Content-Type": "application/json"}
        });
        request.then(response => response.json())
        .then(data => { 
            console.log(data);
            setArtist('');
            setName('');
            setImageUrl('');
            setId('');
        }
        ).catch(error => console.log(error));
    }
    // return to home page if album is submitted
    if (album.Id) {
        return <div>
            <h2>Album added!</h2>
            <Button><Link to="">Home</Link></Button>
        </div>
    }


    
    return (
        <div>
            <form onSubmit={(onSubmit)}>
                <Card>
                    <CardContent>
                        <TextField
                            label="Artist"
                            value={Artist}
                            onChange={(event) => setArtist(event.target.value)}
                        />
                        <TextField
                            label="Name"
                            value={Name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            label="ImageUrl"
                            value={ImageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                        <TextField
                            label="Id"
                            value={Id}
                            onChange={(event) => setId(event.target.value)}
                        />
                        <Button type="submit">Submit</Button>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}

export default AlbumForm;