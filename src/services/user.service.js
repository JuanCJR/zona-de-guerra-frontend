import getRoute from "../routes/user.routes";
import axios from "axios";

//funcion para obtener usuarios
export const getUsuarios = async (token) => {
  const result = await axios.get(getRoute("consulta-usuario"), {
    headers: { "x-access-token": token },
  });
  return result.data;
};

//funcion para crear usuario
export const postUsuario = async (postData) => {
  const token = sessionStorage.getItem("token");
  const result = await axios.post(
    getRoute("crea-usuario"),
    {
      usuario: postData.usuario,
    },
    {
      headers: { "x-access-token": token },
    }
  );
  return result.data;
};

//funcion para modificar usuario
export const putUsuario = async (putData) => {
  const token = sessionStorage.getItem("token");
  const result = await axios.put(getRoute("actualiza-usuario"), putData, {
    headers: { "x-access-token": token },
  });
  return result.data;
};

//funcion para eliminar usuario
export const deleteUsuario = async (deleteData) => {
  const token = sessionStorage.getItem("token");

  const result = await axios.delete(getRoute("elimina-usuario"), {
    headers: { "x-access-token": token },
    data: deleteData,
  });
  return result.data;
};

//funcion para iniciar sesion usuario
export const loginUsuario = async (nom_usu, passwd) => {
  const result = await axios.post(getRoute("login"), {
    nom_usu: nom_usu,
    passwd: passwd,
  });
  return result.data;
};

//funcion para iniciar sesion usuario
export const validaSesion = async (token) => {
  const result = await axios.get(getRoute("valida-sesion"), {
    headers: { "x-access-token": token },
  });
  return result.data;
};

//funcion para cambair contraseña
export const changePasswd = async (putData) => {
  const token = sessionStorage.getItem("token");
  const result = await axios.put(getRoute("actualiza-contraseña"), putData, {
    headers: { "x-access-token": token },
  });
  return result.data;
};
