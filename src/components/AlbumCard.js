import { CardHeader, CardMedia } from '@material-ui/core';
import { Card } from '@material-ui/core'; 

const AlbumCard = ({ id, name, artist, imageUrl }) => {
    return (
      <Card>
        <CardHeader>
          id={id} title={name} subheader={artist} 
        </CardHeader> 
        <CardMedia>
          {artist}
          <br></br>
          {name}
          <img src={imageUrl} alt="" />
        </CardMedia>

      </Card>
    );
};

export default AlbumCard;