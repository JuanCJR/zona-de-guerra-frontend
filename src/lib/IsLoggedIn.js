import { validaSesion } from "../services/user.service";

/**
 * 
 * @param {history} history 
 * @returns usuario || false
 */
export async function IsLoggedIn(history){
  const token = sessionStorage.getItem("token");
  if (token) {
    const usuario = await validaSesion(token);
    return usuario;
  } else {
    history.push("/login");
    return false;
  }
};
