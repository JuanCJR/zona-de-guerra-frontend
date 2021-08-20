import React, { useState } from "react";
import { Button, Offcanvas, Form, FloatingLabel, Modal } from "react-bootstrap";
import {
  onChangeFecValue,
  onChangeDefaultValue,
} from "../../lib/onChangeValue";
import { HorasDisponibles } from "../ReservaForm/HorasDisponibles";
import { putReserva, deleteReserva } from "../../services/gestion.service";
export const ReservasOptionsOffCanvas = (props) => {
  const { reserva, changePrincipalState,handlerRefresh } = props;

  const [validated, setValidated] = useState(false);

  const [state, changeState] = useState({
    newFec_reserva: reserva.fec_reserva,
    hora: "",
    nom_cli: reserva.nom_cli,
    ape_cli: reserva.ape_cli,
    rut_cli: reserva.rut_cli,
    telefono: reserva.telefono,
    email: reserva.email,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  //Handler para submit de actualizacion de reserva
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);

      const putData = {
        reserva: {
          cod_reserva: reserva.cod_reserva,
          nom_cli: state.nom_cli,
          ape_cli: state.ape_cli,
          rut_cli: state.rut_cli,
          telefono: state.telefono,
          email: state.email,
          fec_reserva: state.hora
            ? `${state.newFec_reserva} ${state.hora}`
            : reserva.fec_reserva,
        },
      };
      const result = await putReserva(putData);

      //Modifica estado principal
      changePrincipalState((state) => ({
        ...state,
        message: result.data.message,
        code: result.code,
        alertType: "update",
      }));

      await handlerRefresh();
    }
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Opciones
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Informacion de la Reserva #{reserva.cod_reserva}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Formulario de reserva */}

          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <FloatingLabel label="Fecha de Reserva">
              <Form.Control
                type="text"
                value={new Date(reserva.fec_reserva).toLocaleString()}
                disabled
              />
            </FloatingLabel>

            <FloatingLabel
              className="mt-3"
              label="Nueva Fecha"
              onChange={(e) =>
                onChangeFecValue(e, "newFec_reserva", changeState)
              }
            >
              <Form.Control
                type="date"
                min={new Date().toISOString().slice(0, 10)}
              />
              <Form.Control.Feedback type="invalid">
                Seleccione una fecha
              </Form.Control.Feedback>
            </FloatingLabel>
            <HorasDisponibles
              fec_reserva={state.newFec_reserva}
              onChangeHora={onChangeDefaultValue}
              changeState={changeState}
              isRequired={false}
            />

            <Offcanvas.Title className="mt-4">
              Información del Cliente #{reserva.cod_cli}
            </Offcanvas.Title>
            {/* Formulario de cliente */}

            {/* Nombre */}
            <FloatingLabel
              label="Nombre"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "nom_cli", changeState)}
            >
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                required
                value={state.nom_cli}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su nombre
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Apellido */}
            <FloatingLabel
              label="Apellido"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "ape_cli", changeState)}
            >
              <Form.Control
                type="text"
                placeholder="Ingresar Apellido"
                required
                value={state.ape_cli}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su apellido
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Rut */}
            <FloatingLabel
              label="RUT"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "rut_cli", changeState)}
            >
              <Form.Control
                type="text"
                placeholder="Ingresar RUT"
                required
                value={state.rut_cli}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su RUT
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Telefono */}
            <FloatingLabel
              label="Telefono"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "telefono", changeState)}
            >
              <Form.Control
                type="text"
                placeholder="Ingresar Telefono"
                required
                value={state.telefono}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su numero de telefono
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Email */}
            <FloatingLabel
              label="Email"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "email", changeState)}
            >
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={state.email}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su email
              </Form.Control.Feedback>
            </FloatingLabel>

            <Button type="submit" className="w-100 mt-4">
              Modificar Cliente
            </Button>
          </Form>
          <DeleteModal
          canvasHandleClose={handleClose}
            changePrincipalState={changePrincipalState}
            cod_reserva={reserva.cod_reserva}
            handlerRefresh={handlerRefresh}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

const DeleteModal = (props) => {
  const { cod_reserva, changePrincipalState,canvasHandleClose,handlerRefresh } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClickDelete = async () => {
    const deleteData = {
      reserva: { cod_reserva: cod_reserva },
    };
    const result = await deleteReserva(deleteData);
    //Modifica estado principal
    changePrincipalState((state) => ({
      ...state,
      message: result.data.message,
      code: result.code,
      alertType: "delete",
    }));
    handleClose();
    canvasHandleClose();
    await handlerRefresh();
    
  };
  return (
    <React.Fragment>
      <Button onClick={handleShow} className="w-100 mt-3" variant="danger">
        Eliminar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <h4>Confirmar Eliminación de reserva</h4>
        </Modal.Header>
        <Modal.Body>
          <p>Se eliminara la reserva: {cod_reserva}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={onClickDelete}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
