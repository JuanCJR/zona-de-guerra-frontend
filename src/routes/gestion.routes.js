const host =
  process.env.REACT_APP_DEVENV === "1"
    ? "http://localhost:8081/gestion/api/v1"
    : "";

const routes = [
  {
    name: "list-reservas",
    route: `${host}/reserva`,
    method: "GET",
  },
  {
    name: "horario-disponible",
    route: `${host}/reserva/disponibilidad`,
    method: "GET",
  },
  {
    name: "crea-reserva",
    route: `${host}/reserva`,
    method: "POST",
  },
  {
    name: "actualiza-reserva",
    route: `${host}/reserva`,
    method: "PUT",
  },

  {
    name: "elimina-reserva",
    route: `${host}/reserva`,
    method: "DELETE",
  },


];

const getRoute = (name) => {
  const route = routes.filter((r) => r.name === name);
  return route[0].route;
};

export default getRoute;