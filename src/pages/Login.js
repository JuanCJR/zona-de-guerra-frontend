import React, { useState, useEffect } from "react";
import { PageTemplate } from "../components/PageTemplate";
import {
  Form,
  Card,
  Button,
  FloatingLabel,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { onChangeDefaultValue } from "../lib/onChangeValue";
import { LoginAlert } from "../components/alert/LoginAlert";
import { loginUsuario } from "../services/user.service";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [validated, setValidated] = useState(false);
  const [state, changeState] = useState({
    nom_usu: "",
    passwd: "",
  });
  const [loginStatus, setLoginStatus] = useState(0);

  let history = useHistory();

  useEffect(() => {
    async function loadData() {
      const token = sessionStorage.getItem("token");
      if (token) {
        history.push("/admin");
      }
    }
    loadData();
  }, [history]);

  //Handler para submit
  const handleSubmit = async (event) => {
    const { nom_usu, passwd } = state;
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);
      try {
        const user = await loginUsuario(nom_usu, passwd);
        sessionStorage.setItem("token", user.data.token);
        sessionStorage.setItem("expiresIn", user.data.expiresIn);

        history.push("/admin");
      } catch (e) {
        setLoginStatus(e.response.status);
      }
    }
  };

  return (
    <PageTemplate>
      {!sessionStorage.getItem("token") ? (
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <LoginAlert loginStatus={loginStatus} />
              <Card className="w-100 mw-100 mt-5">
                <Card.Body>
                  <Form
                    oValidate
                    validated={validated}
                    onSubmit={async (e) => {
                      handleSubmit(e);
                    }}
                  >
                    <h4>Menu de Administración</h4>
                    <h6>Inicio de sesion</h6>
                    <FloatingLabel
                      label="Usuario"
                      className="mt-3"
                      onChange={(e) => {
                        onChangeDefaultValue(e, "nom_usu", changeState);
                      }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Usuario"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Ingresar usuario
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                      label="Contraseña"
                      className="mt-3"
                      onChange={(e) => {
                        onChangeDefaultValue(e, "passwd", changeState);
                      }}
                    >
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Ingresar contraseña
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <Button type="submit" className="mt-3 w-100">
                      Ingresar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </PageTemplate>
  );
};
