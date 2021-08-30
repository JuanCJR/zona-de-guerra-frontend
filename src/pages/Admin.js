import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { PageTemplate } from "../components/PageTemplate";
import { Container, Col, Row, Card } from "react-bootstrap";
import { getReservas } from "../services/gestion.service";
import { IsLoggedIn } from "../lib/IsLoggedIn";
import { useHistory } from "react-router-dom";
import { ReservasOptionsOffCanvas } from "../components/templateForm/ReservasOptionsOffCanvas";
import { OptionsResponseAlert } from "../components/alert/OptionsResponseAlert";

export const Admin = () => {
  const [state, changeState] = useState({
    message: "",
    code: 0,
    reservas: [],
    alertType: "select",
  });

  let history = useHistory();

  useEffect(() => {
    async function loadData() {
      const usuario = await IsLoggedIn(history);
      if (usuario) {
        const reservas = await getReservas();
        changeState((state) => ({
          ...state,
          message: reservas.message,
          code: reservas.code,
          reservas: reservas.data,
          usuario: usuario.data,
        }));
      }
    }
    loadData();
  }, [changeState]);

  //Funcion para refrescar data
  const handlerRefresh = async () => {
    const usuario = await IsLoggedIn(history);
    if (usuario) {
      const reservas = await getReservas();
      changeState((state) => ({
        ...state,
        message: reservas.message,
        code: reservas.code,
        reservas: reservas.data,
        usuario: usuario.data,
      }));
    }
  };

  
  return (
    <PageTemplate>
      {sessionStorage.getItem("token") ? (
        <Container>
          {/* Tarifas */}
          <Row className="justify-content-md-center">
            <Col>
              <h2>Gestion de Reservas</h2>

              <OptionsResponseAlert
                code={state.code}
                message={state.message}
                alertType={state.alertType}
              />

              <Table className="text-white">
                <thead>
                  <tr>
                    <th>Codigo Reserva</th>
                    <th>Fecha Reserva</th>
                    <th>Cliente</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {state.reservas.length ? (
                    state.reservas.map((d) => {
                      return (
                        <tr>
                          <td>{d.cod_reserva}</td>
                          <td>{new Date(d.fec_reserva).toLocaleString()}</td>
                          <td>{d.cliente}</td>
                          <td>
                            <ReservasOptionsOffCanvas
                            handlerRefresh={handlerRefresh}
                              reserva={d}
                              changePrincipalState={changeState}
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>No se encontraron reservas</tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr className="featurette-divider"></hr>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </PageTemplate>
  );
};
