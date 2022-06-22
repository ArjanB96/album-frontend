import { Card, CardContent, TextField } from '@material-ui/core'; 
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Navigate } from "react-router-dom";


const AlbumForm = ( ) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/Albums/`;
    const [album] = useState([]);
    const [artist, setArtist] = useState(album.artist || '');
    const [name, setName] = useState(album.name || '');
    const [imageUrl, setImageUrl] = useState(album.imageUrl || '');
    const [id, setId] = useState(album.id || '');

    const onSubmit = (e) => {
        e.preventDefault();
        const request = fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                artist: artist,
                name: name,
                imageUrl: imageUrl
            })
        });
        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }
                return apiResponse.json();
            }
            )
            .then((apiResult) => {
                setArtist('');
                setName('');
                setImageUrl('');
                setId('');
            }
            )
            .catch((error) => {
                console.error(error);
                console.log(artist)
            }
            );

    }
    const onChangeArtist = (e) => {
        setArtist(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeImageUrl = (e) => {
        setImageUrl(e.target.value);
    }
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const newAlbum = {
        artist: artist,
        name: name,
        imageUrl: imageUrl,
        id: id
    }
    const handleSubmit =  (onSubmit) => {
        const request = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {"Content-Type": "application/json"}
        });
        request.then((response) => {
            if(!response.ok) {
                console.error(response.statusText);
            } else {
                console.log("Album created");
                Navigate("/");
            }
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardContent>
                        <TextField
                            label="Artist"
                            value={artist}
                            onChange={(event) => setArtist(event.target.value)}
                        />
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            label="ImageUrl"
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                        <TextField
                            label="Id"
                            value={id}
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