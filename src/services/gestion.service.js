import getRoute from "../routes/gestion.routes";
import axios from "axios";

//funcion para obtener reservas
export const getReservas = async () => {
  const result = await axios.get(getRoute("list-reservas"));
  return result.data;
};

//funcion para obtener fechas disponibles
export const getHorasDisponibles = async (fec_reserva) => {
  const result = await axios.get(
    `${getRoute("horario-disponible")}?fec_reserva=${fec_reserva}`
  );
  return result.data;
};

//funcion para crear reserva
export const postReserva = async (postData) => {
  const result = await axios.post(`${getRoute("crea-reserva")}`, postData);
  return result.data;
};

//funcion para crear reserva
export const putReserva = async (putData) => {
  const token = sessionStorage.getItem("token");
  const result = await axios.put(`${getRoute("actualiza-reserva")}`, putData, {
    headers: { "x-access-token": token },
  });
  return result.data;
};

//funcion para eliminar reserva
export const deleteReserva = async (deleteData) => {
  const token = sessionStorage.getItem("token");
  const result = await axios.delete(`${getRoute("elimina-reserva")}`, {
    headers: { "x-access-token": token },
    data: deleteData,
  });
  return result.data;
};
