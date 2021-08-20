import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Container, Col, Row } from "react-bootstrap";
export const Contacto = () => {
  return (
    <PageTemplate>
      <Container fluid>
        <Row className="mt-4 text-start">
          {/* Columna de info */}
          <Col sm={4}>
            <h4>Dirección</h4>
            <p>
              Lorem ipsum dolor sit amet et delectus accommodare his consul
              copiosae legendos at vix ad putent delectus delicata usu. Vidit
            </p>
            <h4>Telefono</h4>
            <p>
              Lorem ipsum dolor sit amet et delectus accommodare his consul
              copiosae legendos at vix ad putent delectus delicata usu. Vidit
            </p>
          </Col>

          {/* Columna de Mapa */}
          <Col sm={8}>
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3049612096706!2d-70.62878892325635!3d-33.61498209743248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d82b4f122871%3A0xe396e1c182dc2953!2sPG182-Parada%201%20%2F%20Paradero%2047%20Santa%20Rosa!5e0!3m2!1ses-419!2scl!4v1623361112898!5m2!1ses-419!2scl"
              //width="600"
              height="500"
              style={{ border: "0", width: "100%" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};
