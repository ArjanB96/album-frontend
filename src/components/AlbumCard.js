import { CardHeader, CardMedia } from '@material-ui/core';
import { Card } from '@material-ui/core'; 
import { Link } from "react-router-dom";


const AlbumCard = ({ id, name, artist, imageUrl }) => {
    return (
      <Card>
        <CardHeader>
          id={id} title={name} subheader={artist} 
        </CardHeader> 
        <CardMedia>
            <Link to ={`/albumdetail/${id}`}>
              <img src={imageUrl} alt={name} />
            </Link>
          <br></br>
          {artist}
          <br></br>
          {name}
        </CardMedia>

      </Card>
    );
};

export default AlbumCard;