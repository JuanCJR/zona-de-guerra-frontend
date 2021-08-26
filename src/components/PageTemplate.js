import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { validaSesion } from "../services/user.service";

export const PageTemplate = (props) => {
  const [state, changeState] = useState({
    nom_usu: "",
    isLoggedIn: false,
  });

  let history = useHistory();

  useEffect(() => {
    async function loadData() {
      const token = sessionStorage.getItem("token");

      if (token) {
        const usuario = await validaSesion(token);
        changeState((state) => ({
          ...state,
          nom_usu: usuario.data.nom_usu,
          isLoggedIn: true,
        }));
      }
    }
    loadData();
  }, [changeState]);

  const handleClick = (route) => {
    history.push(route);
  };

  //Funcion para cerrar sesion
  const onLogOut = () => {
    sessionStorage.clear();
    changeState((state) => ({
      nom_usu: "",
      isLoggedIn: false,
    }));
    history.push("/login");
  };

  return (
    <React.Fragment>
      {/** Header */}
      <header>
        <Container fluid>
          <Navbar expand="lg">
            <Navbar.Brand className="mx-auto">
              Zona de Guerra Paintball
            </Navbar.Brand>
          </Navbar>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mx-auto">
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/")}
                >
                  Inicio
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/tarifas")}
                >
                  Tarifas
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/galeria")}
                >
                  Galeria
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/reservar")}
                >
                  Reservar
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/contacto")}
                >
                  Contacto
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link>
                  <img
                    className="me-2"
                    width="30"
                    src="img/facebook.png"
                    alt="facebook icon"
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/guerrapaintballjm/?hl=es"
                  target="_blank"
                >
                  <img
                    className="me-2"
                    width="30"
                    src="img/instagram.png"
                    alt="instagram icon"
                  />
                </Nav.Link>
                {state.isLoggedIn ? (
                  <>
                    <Nav.Link
                      className="me-5 ms-5"
                      onClick={() => handleClick("/usuarios")}
                    >
                      Usuarios
                    </Nav.Link>
                    <Nav.Link
                      className="me-5 ms-5"
                      onClick={() => handleClick("/admin")}
                    >
                      Reservas
                    </Nav.Link>
                  </>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </Nav>
            </Navbar.Collapse>

            {state.isLoggedIn ? (
              <Navbar.Collapse>
                <Navbar.Text style={{ fontSize: "0.8rem" }}>
                  Usuario: {state.nom_usu}
                </Navbar.Text>
                <Button className="ms-3" onClick={onLogOut}>
                  Salir
                </Button>
              </Navbar.Collapse>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </Navbar>
        </Container>
      </header>
      {/** Main */}
      <main>{props.children}</main>
      {/** Footer */}
      {/* <footer className="text-muted text-start mt-5 footer">
        <Container>
          <p className="float-end">
            <a href="/"> Ir al inicio</a>
          </p>
          <p>Info</p>
          <p>
            <img
              className="me-2"
              src="img/instagram.png"
              alt="instagram icon"
            />
            Instagram
          </p>
          <p>
            <img className="me-2" src="img/facebook.png" alt="facebook icon" />
            Facebook
          </p>
        </Container>
      </footer> */}
      <footer class="container">
        <p class="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017–2021 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </React.Fragment>
  );
};
