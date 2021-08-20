import React, { useState } from "react";
import { Button, Offcanvas, Form, FloatingLabel, Modal } from "react-bootstrap";
import { onChangeDefaultValue } from "../../lib/onChangeValue";
import {
  putUsuario,
  deleteUsuario,
  changePasswd,
} from "../../services/user.service";
export const UsuariosOptionsOffCanvas = (props) => {
  const { usuario, changePrincipalState, handlerRefresh } = props;

  const [validated, setValidated] = useState(false);

  const [state, changeState] = useState({
    nom_usu: usuario.nom_usu,
    email: usuario.email,
    passwd: usuario.passwd,
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
        usuario: {
          cod_usu: usuario.cod_usu,
          nom_usu: state.nom_usu,
          email: state.email,
        },
      };
      const result = await putUsuario(putData);
      console.log(result.data.message);
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
            Informacion del Usuario #{usuario.cod_usu}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Formulario de reserva */}

          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            {/* Nombre de usuario */}
            <FloatingLabel
              label="Nombre de Usuario"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "nom_usu", changeState)}
            >
              <Form.Control
                type="text"
                placeholder="Ingresar nombre de usuario"
                required
                value={state.nom_usu}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un nombre de usuario valido
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
              Modificar usuario
            </Button>
          </Form>
          <ChangePasswordModal
            cod_usu={usuario.cod_usu}
            changePrincipalState={changePrincipalState}
          />
          <DeleteModal
            canvasHandleClose={handleClose}
            changePrincipalState={changePrincipalState}
            cod_usu={usuario.cod_usu}
            handlerRefresh={handlerRefresh}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

const DeleteModal = (props) => {
  const { cod_usu, changePrincipalState, canvasHandleClose, handlerRefresh } =
    props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClickDelete = async () => {
    const deleteData = {
      usuario: { cod_usu: cod_usu },
    };
    const result = await deleteUsuario(deleteData);
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
      <Button
        onClick={handleShow}
        className="w-100 mb-4 position-absolute bottom-0  end-0"
        variant="danger"
      >
        Eliminar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4>Confirmar Eliminación de usuario</h4>
        </Modal.Header>
        <Modal.Body>
          <p>Se eliminara el usuario: {cod_usu}</p>
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

const ChangePasswordModal = (props) => {
  const { cod_usu, changePrincipalState } = props;
  const [state, changeState] = useState({
    passwd: "",
    confirmPasswd: "",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [validated, setValidated] = useState(false);

  //Handler para el cambio de contraseña
  const handleSubmit = async (event) => {
    const { passwd, confirmPasswd } = state;
    
    const form = event.currentTarget;
    event.preventDefault();

    //const isValidPasswd = passwd === confirmPasswd ? true : false;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);

      const putData = {
        usuario: {
          cod_usu: cod_usu,
          passwd: passwd,
        },
      };
      const result = await changePasswd(putData);

      //Modifica estado principal
      changePrincipalState((state) => ({
        ...state,
        message: result.data.message,
        code: result.code,
        alertType: "update",
      }));
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Button onClick={handleShow} className="w-100 mt-4">
        Cambiar Contraseña
      </Button>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header closeButton>Cambio de Contraseña</Modal.Header>
        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Nueva Contraseña */}
            <FloatingLabel
              label="Nueva Contraseña"
              className="mt-3"
              onChange={(e) => onChangeDefaultValue(e, "passwd", changeState)}
            >
              <Form.Control
                type="password"
                placeholder="Ingresar nueva contraseña"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una nueva contraseña
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* Confirmar Contraseña */}
            <FloatingLabel
              label="Confirmar Contraseña"
              className="mt-3"
              onChange={(e) =>
                onChangeDefaultValue(e, "confirmPasswd", changeState)
              }
            >
              <Form.Control
                type="password"
                placeholder="Ingresar nuevamente la contraseña"
                required
              />
              <Form.Control.Feedback type="invalid">
                Las contraseñas ingresadas no son iguales, ingresar nuevamente.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit">Confirmar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
};
