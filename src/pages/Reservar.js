import React, { useState } from "react";
import { Container, Col, Row, Card, Form, Button, FloatingLabel} from "react-bootstrap";
import { PageTemplate } from "../components/PageTemplate";
import { HorasDisponibles } from '../components/ReservaForm/HorasDisponibles';
import { onChangeDefaultValue, onChangeFecValue } from '../lib/onChangeValue';
import { postReserva } from '../services/gestion.service';
import { CreateReservaAlert } from "../components/alert/CustomAlert";
export const Reservar = () => {
  const [validated, setValidated] = useState(false);
  //Estado de creacion de reserva
  const [postState, setPostState] = useState({
    data: [],
    code: 0,
    message: "",
  });
  //estado de datos ingresados
  const [state, changeState] = useState({
    fec_reserva: "",
    hora: "",
    nom_cli: "",
    ape_cli: "",
    rut_cli: "",
    telefono: "",
    email: ""
  });

  //Handler para submit
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);

      const postData = {
        reserva: {
          nom_cli: state.nom_cli,
          ape_cli: state.ape_cli,
          rut_cli: state.rut_cli,
          telefono: state.telefono,
          email: state.email,
          fec_reserva: `${state.fec_reserva} ${state.hora}`
        }
      }
      const result = await postReserva(postData);
      setPostState(result);

    }

  };
  return (
    <PageTemplate>


      <Container>
        <Row className="text-start">
          {/* Columna de insercion */}
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <h4>Nueva reserva</h4>
                  <p>Ingrese los siguientes datos para completar su reserva</p>
                  <br></br>

                  {/* Fecha */}
                  <FloatingLabel label="Fecha" onChange={(e) => onChangeFecValue(e, 'fec_reserva', changeState)}>
                    <Form.Control type="date" required min={new Date().toISOString().slice(0,10)} />
                    <Form.Control.Feedback type="invalid">Seleccione una fecha</Form.Control.Feedback>
                  </FloatingLabel>
                  {/* Hora */}
                  <HorasDisponibles fec_reserva={state.fec_reserva} onChangeHora={onChangeDefaultValue} changeState={changeState} 
              isRequired={false}
              />

                  {/* Nombre */}
                  <FloatingLabel label="Nombre" className="mt-3" onChange={(e) => onChangeDefaultValue(e, 'nom_cli', changeState)}>
                    <Form.Control type="text" placeholder="Ingresar nombre" required />
                    <Form.Control.Feedback type="invalid">Ingrese su nombre</Form.Control.Feedback>
                  </FloatingLabel>

                  {/* Apellido */}
                  <FloatingLabel label="Apellido" className="mt-3" onChange={(e) => onChangeDefaultValue(e, 'ape_cli', changeState)}>
                    <Form.Control type="text" placeholder="Ingresar Apellido" required />
                    <Form.Control.Feedback type="invalid">Ingrese su apellido</Form.Control.Feedback>
                  </FloatingLabel >

                  {/* Rut */}
                  <FloatingLabel label="RUT" className="mt-3" onChange={(e) => onChangeDefaultValue(e, 'rut_cli', changeState)}>
                    <Form.Control type="text" placeholder="Ingresar RUT" required />
                    <Form.Control.Feedback type="invalid">Ingrese su RUT</Form.Control.Feedback>

                  </FloatingLabel>

                  {/* Telefono */}
                  <FloatingLabel label="Telefono" className="mt-3" onChange={(e) => onChangeDefaultValue(e, 'telefono', changeState)}>
                    <Form.Control type="text" placeholder="Ingresar Telefono" required />
                    <Form.Control.Feedback type="invalid">Ingrese su numero de telefono</Form.Control.Feedback>

                  </FloatingLabel>

                  {/* Email */}
                  <FloatingLabel label="Email" className="mt-3" onChange={(e) => onChangeDefaultValue(e, 'email', changeState)}>
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">Ingrese su email</Form.Control.Feedback>
                  </FloatingLabel>

                  <Button type="submit" className="mt-3">Realizar reservación</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Columna de datos */}
          <Col sm={6}>
            <Card>
              <Card.Body>
              <h4>Detalle de reserva</h4>
                {postState.code === 200 ? <React.Fragment>
                  <p>Fecha de reserva: {state.fec_reserva} {state.hora}</p>
                  <p>Reserva a nombre de: {state.nom_cli} {state.ape_cli}</p>
                  <p>Telefono: {state.telefono}</p>
                  <p>Email: {state.email}</p>
                </React.Fragment> : <React.Fragment></React.Fragment>
                }

                <CreateReservaAlert postState={postState} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr className="featurette-divider"></hr>
      </Container>
    </PageTemplate>
  );
};
