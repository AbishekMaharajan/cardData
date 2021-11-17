import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
function CardData({ items }) {
  return (
    <Container fluid className=" bg-light">
      <Row xs={1} md={4} className="g-4 mt-1">
        {items.map((item) => (
          <Col key={item.id}>
            <Card
              className="shadow p-3 mb-5 text-light rounded bg-dark"
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{item.title}</Card.Text>
                <Button variant="light">
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
