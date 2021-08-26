import React, { useState, useEffect } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { PageTemplate } from "../components/PageTemplate";
import { IsLoggedIn } from "../lib/IsLoggedIn";
import { getUsuarios } from "../services/user.service";
import { useHistory } from "react-router-dom";
import { OptionsResponseAlert } from "../components/alert/OptionsResponseAlert";
import { UsuariosOptionsOffCanvas } from "../components/templateForm/UsuariosOptionsOffCanvas";
import { CreateUserForm } from "../components/templateForm/CreateUserForm";
export const Users = () => {
  const [state, changeState] = useState({
    message: "",
    code: 0,
    usuarios: [],
    alertType: "select",
  });

  const token = sessionStorage.getItem("token");
  let history = useHistory();

  useEffect(() => {
    async function loadData() {
      const usuario = await IsLoggedIn(history);
      if (usuario) {
        const usuarios = await getUsuarios(token);
        changeState((state) => ({
          ...state,
          message: usuarios.message,
          code: usuarios.code,
          usuarios: usuarios.data,
          usuario: usuario.data,
        }));
      }
    }
    loadData();
  }, [changeState, token]);

  //Funcion para refrescar data
  const handlerRefresh = async () => {
    const usuario = await IsLoggedIn(history);
    if (usuario) {
      const usuarios = await getUsuarios(token);
      changeState((state) => ({
        ...state,
        message: usuarios.message,
        code: usuarios.code,
        usuarios: usuarios.data,
        usuario: usuario.data,
      }));
    }
  };

  return (
    <PageTemplate>
      <Container fluid>
        <Row>
          <Col>
            <h2>Gestion de Usuarios</h2>
            <OptionsResponseAlert
              code={state.code}
              message={state.message}
              alertType={state.alertType}
            />
            <Table>
              <thead>
                <tr>
                  <th>Codigo </th>
                  <th>Nombre </th>
                  <th>Email</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {state.usuarios.map((u) => {
                  return (
                    <tr key={u.cod_usu}>
                      <td>{u.cod_usu}</td>
                      <td>{u.nom_usu}</td>
                      <td>{u.email}</td>
                      <td>
                        <UsuariosOptionsOffCanvas
                          handlerRefresh={handlerRefresh}
                          usuario={u}
                          changePrincipalState={changeState}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <CreateUserForm
              changePrincipalState={changeState}
              handlerRefresh={handlerRefresh}
            />
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};
