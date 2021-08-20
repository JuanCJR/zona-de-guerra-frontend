import React, { useState, useEffect } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { getHorasDisponibles } from "../../services/gestion.service";
//Componente que despliegua combobox de horas disponibles
export const HorasDisponibles = (props) => {
  const { fec_reserva, onChangeHora, changeState, isRequired } = props;
  const [state, setState] = useState({
    code: 0,
    message: "",
    horas: [],
  });

  //Cargar horas
  useEffect(() => {
    async function loadHoras() {
      if (fec_reserva) {
        const data = await getHorasDisponibles(fec_reserva);
        setState((state) => ({
          ...state,
          code: data.code,
          message: data.message,
          horas: data.data,
        }));
      }
    }

    loadHoras();
  }, [changeState, fec_reserva]);

  return (
    <FloatingLabel
      label="Horas Disponibles"
      onChange={(e) => onChangeHora(e, "hora", changeState)}
      className="mt-3"
    >
      <Form.Control as="select" required={isRequired}>
        <option value="">Seleccione una hora</option>
        {state.horas.length < 1 || fec_reserva.length < 1 ? (
          <></>
        ) : (
          state.horas.map((h) => <option>{h.horario}</option>)
        )}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Seleccione una hora disponible
      </Form.Control.Feedback>
    </FloatingLabel>
  );
};
