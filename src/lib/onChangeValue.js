//
/**
 * Handler para cambio de valores
 * @param {Event} e Evento
 * @param {String} valueName Nombre de la variable de estado
 * @param {Function} changeState Funcion hook de cambio de estado
 */
export const onChangeDefaultValue = (e, valueName, changeState) => {
  let value = e.target.value;
  changeState((state) => ({
    ...state,
    [valueName]: value,
  }));
};

/**
 * Handler para cambio de fechas
 * @param {Event} e Evento
 * @param {String} valueName Nombre de la variable de estado
 * @param {Function} changeState Funcion hook de cambio de estado
 */
export const onChangeFecValue = (e, valueName, changeState) => {
  let value = e.target.value.replaceAll("-", "/");
  changeState((state) => ({
    ...state,
    [valueName]: value,
  }));
};

/**
 * Handler para cambio de archivo
 * @param {Event} e Evento
 * @param {String} valueName Nombre de la variable de estado
 * @param {Function} changeState Funcion hook de cambio de estado
 */
export const onChangeFileValue = (e, valueName, changeState) => {
  let file = e.target.files[0];
  changeState((state) => ({
    ...state,
    [valueName]: file,
  }));
};
