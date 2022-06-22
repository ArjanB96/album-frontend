import {useEffect, useState} from "react";
import AlbumDetail from "../components/AlbumDetail";

//http://alb-album-914234631.us-east-1.elb.amazonaws.com/api/albums/1
//http://alb-album-914234631.us-east-1.elb.amazonaws.com/api/albums/2
//http://alb-album-914234631.us-east-1.elb.amazonaws.com/api/albums/3

const endpoint = `${process.env.REACT_APP_API_URL}/albums/`;

const useAlbum = () => {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const request = fetch(endpoint);

        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }

                return apiResponse.json();
            })
            .then((apiResult) => {
                setAlbum(apiResult);
            });
    }, []);

    return album;
};

export default useAlbum;

