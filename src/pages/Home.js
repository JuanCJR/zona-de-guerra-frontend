import React from "react";
import { Container, Col, Row, Carousel, Card } from "react-bootstrap";
import { PageTemplate } from "../components/PageTemplate";
export const Home = () => {
  return (
    <PageTemplate>
      <Container fluid>
        {/* Carrusel */}
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ width: "30%" }}
                  className="d-block mx-auto"
                  src="img/logo192.png"
                  alt="First slide"
                />
                <Carousel.Caption style={{color:"black"}}>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* informacion */}
        <Row className="mt-2 justify-content-md-center">
          {/* Columa 1 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 2 */}
          <Col md="auto"> 
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 3 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};
