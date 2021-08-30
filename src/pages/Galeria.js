import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Container, Col, Row, Card } from "react-bootstrap";
export const Galeria = () => {
  const imgUrlBase = "img/galeria/";
  const imagenes = [
    { url: `${imgUrlBase}/1.jpeg` },
    { url: `${imgUrlBase}/2.jpeg` },
    { url: `${imgUrlBase}/3.jpeg` },
    { url: `${imgUrlBase}/4.jpeg` },
    { url: `${imgUrlBase}/5.jpeg` },
    { url: `${imgUrlBase}/6.jpeg` },
    { url: `${imgUrlBase}/7.jpeg` },
    { url: `${imgUrlBase}/8.jpeg` },
    { url: `${imgUrlBase}/9.jpeg` },
    { url: `${imgUrlBase}/10.jpeg` },
    { url: `${imgUrlBase}/11.jpeg` },
    { url: `${imgUrlBase}/12.jpeg` },
    { url: `${imgUrlBase}/13.jpeg` },
    { url: `${imgUrlBase}/14.jpeg` },
    { url: `${imgUrlBase}/15.jpeg` },
    { url: `${imgUrlBase}/16.jpeg` },
  ];

  return (
    <PageTemplate>
      <Container>
        {/* Tarifas */}
        <Row className="justify-content-md-center">
          {imagenes.map((i, index) => {
            return (
              <Col key={index}>
                <Card border="primary" style={{ width: "25rem" }} className="mt-3">
                  <Card.Img variant="top" src={i.url} />
                </Card>
              </Col>
            );
          })}
        </Row>
        <hr className="featurette-divider"></hr>
      </Container>
    </PageTemplate>
  );
};
