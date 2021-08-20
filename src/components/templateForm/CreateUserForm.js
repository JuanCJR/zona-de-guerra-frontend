import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { onChangeDefaultValue } from "../../lib/onChangeValue";
import {postUsuario} from '../../services/user.service';
export const CreateUserForm = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [state, changeState] = useState({
    nom_usu: "",
    email: "",
    passwd: "",
  });
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <React.Fragment>
      <Button className="w-100" onClick={handleShow}>
        Crear usuario
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Creación de usuario</Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Nombre de usuario */}
            <FloatingLabel
              label="Nombre de usuario"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "nom_usu", changeState)}
            >
              <Form.Control
                type="text"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un nombre de usuario
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Email de usuario */}
            <FloatingLabel
              label="Email"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "email", changeState)}
            >
              <Form.Control type="email" required />
              <Form.Control.Feedback type="invalid">
                Ingrese email del usuario
              </Form.Control.Feedback>
            </FloatingLabel>
            {/* Contraseña de usuario */}
            <FloatingLabel
              label="Contraseña"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "passwd", changeState)}
            >
              <Form.Control type="password" required />
              <Form.Control.Feedback type="invalid">
                Ingrese contraseña del usuario
              </Form.Control.Feedback>
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger">Cancelar</Button>
            <Button type="submit">Crear</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
};
