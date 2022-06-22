import AlbumForm from "./AlbumForm";
import { Link } from "react-router-dom";

const CreateAlbum = () => {
    const albumform = AlbumForm();
    return (
        <div>
        <div>
            <h2>{albumform}</h2>
        </div>
        <Link to="/albumoverview">AlbumOverview</Link>
        </div>
    );
}


export default CreateAlbum;
