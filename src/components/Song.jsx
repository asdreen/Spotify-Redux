import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Song = ({ songs }) => {
  return (
    <div>
      <Card className="m-3" style={{ width: "250px", height: "27em" }}>
        <Card.Img variant="top" src={songs.album.cover_xl} />
        <Card.Body>
          <Card.Title>{songs.title}</Card.Title>
          <Card.Text>{songs.artist.name}</Card.Text>
          <Button variant="success">Like song</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Song;
