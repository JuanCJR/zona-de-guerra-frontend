import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

//Componente de alerta para creacion de reservas
export const CreateReservaAlert = (props) => {
    const { code, message } = props.postState;
    const [show, setShow] = useState(false);

    let history = useHistory();

    useEffect(() => {
        function onLoad() {
            code === 0 ? setShow(false) : setShow(true);
        }
        onLoad();
    }, [setShow, code])

    if (show) {
        if (code === 200) {
            return (
                <Alert className="text-primary" variant="success" onClose={() => history.push('/')} dismissible>
                    <Alert.Heading>Reserva creada con exito!</Alert.Heading>
                    <p className="text-black">Su reserva se a realizado con exito</p>
                </Alert>
            )
        } else {
            return (
                <Alert className="text-primary" variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Error! La reserva no fue creada.</Alert.Heading>
                    <p className="text-black">{message}</p>
                </Alert>
            )
        }
    } else {
        return <React.Fragment></React.Fragment>
    }
}