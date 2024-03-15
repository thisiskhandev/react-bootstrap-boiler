import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ ...styles }}>
      <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;

const styles = {
  border: "1px solid magenta",
  margin: 20,
  color: "red",
};
