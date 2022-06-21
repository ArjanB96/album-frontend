import { CardHeader } from '@material-ui/core';
import { Card } from '@material-ui/core'; 

const AlbumCard = ({ id, name, artist, imageUrl }) => {
    return (
      <Card>
        <Card.Media>
            <img src={imageUrl} alt={name} />
        </Card.Media>
        <CardHeader>
            {name}
        </CardHeader>
      </Card>
    );
};

export default AlbumCard;