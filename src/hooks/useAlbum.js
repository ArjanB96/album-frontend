import {useEffect, useState} from "react";

const useAlbum = (id) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/albums/${id}`;
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
    }, );

    return album;
};

export default useAlbum;

