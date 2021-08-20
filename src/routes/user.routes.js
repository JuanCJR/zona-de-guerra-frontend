const host =
  process.env.REACT_APP_DEVENV === "1"
    ? "http://localhost:8081/admin/api/v1/usuario"
    : "/admin/api/v1/usuario";

const routes = [
  {
    name: "consulta-usuario",
    route: `${host}/`,
    method: "GET",
  },
  {
    name: "crea-usuario",
    route: `${host}/`,
    method: "POST",
  },
  {
    name: "actualiza-usuario",
    route: `${host}/`,
    method: "PUT",
  },
  {
    name: "elimina-usuario",
    route: `${host}/`,
    method: "DELETE",
  },
  {
    name: "login",
    route: `${host}/login`,
    method: "POST",
  },
  {
    name: "valida-sesion",
    route: `${host}/login/valida-sesion`,
    method: "GET",
  },
  {
    name: "actualiza-contraseña",
    route: `${host}/change-passwd`,
    method: "PUT",
  }

];
const getRoute = (name) => {
  const route = routes.filter((r) => r.name === name);
  return route[0].route;
};

export default getRoute;