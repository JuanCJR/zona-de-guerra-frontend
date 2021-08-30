import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, } from "react-bootstrap";
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
        <Container fluid className="p-0">
          <Navbar expand="lg" className="bg-dark ">
              <img
              className="banner mx-auto"
              src="img/banner.jpg"
              />
          </Navbar>
          <Navbar expand="lg" bg="dark" variant="dark" className="" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mx-auto media-item" >
                <Nav.Link
                  className="me-5 ms-5"
                  
                  onClick={() => handleClick("/")}
                >
                  INICIO
                </Nav.Link>
                
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/tarifas")}
                >
                  TARIFAS
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/galeria")}
                >
                  GALERIA
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/reservar")}
                >
                  RESERVAR
                </Nav.Link>
                <Nav.Link
                  className="me-5 ms-5"
                  onClick={() => handleClick("/contacto")}
                >
                  CONTACTO
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
                      USUARIOS
                    </Nav.Link>
                    <Nav.Link
                      className="me-5 ms-5"
                      onClick={() => handleClick("/admin")}
                    >
                      RESERVAS
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
                  USUARIO: {state.nom_usu}
                </Navbar.Text>
                <Button className="ms-3" onClick={onLogOut}>
                  SALIR
                </Button>
              </Navbar.Collapse>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </Navbar>
        </Container>
      </header>
      {/** Main */}
      <main className="main-bg" >{props.children}</main>
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
      <footer class="container" >
        <p class="float-end" > 
          <a href="#">Ir al inicio</a>
        </p>
        <p style={{color:"black"}}>
          © 2021 Zona de Guerra Paintball · 
        </p>
      </footer>
    </React.Fragment>
  );
};
