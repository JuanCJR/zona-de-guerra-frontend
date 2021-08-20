import React from "react-router-dom";
import { PageTemplate } from "../components/PageTemplate";
import { Container, Col, Row, Card } from "react-bootstrap";

export const Tarifas = () => {
  return (
    <PageTemplate>
      <Container fluid>
        {/* Tarifas */}
        <Row className="mt-2 justify-content-md-center">
          {/* Columa 1 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 2 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 3 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 4 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Columa 5 */}
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};
