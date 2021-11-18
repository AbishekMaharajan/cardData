import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
function CardData({ items }) {
  return (
    <Container className=" bg-light">
      <Row className="g-4 mt-1">
        {items.map((item) => (
          <Col key={item.id} className="d-flex justify-content-center">
            <Card
              className="shadow p-3 mb-5 text-dark rounded bg-light"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={item.url} fluid />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{item.title}</Card.Text>
                <Button variant="dark">
                  <FaShoppingCart size="20px" className="mr-5" />
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default CardData;
