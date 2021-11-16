import React from "react";
import { Card, Button, Container } from "react-bootstrap";
function CardData({ items }) {
  return (
    <Container className="mt-5">
      {items.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src={item.thumbnailUrl} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>{item.title}</Card.Text>
            <Button variant="dark">Know More</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
export default CardData;
