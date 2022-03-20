export const MENU_STATUS_UPDATE = "MENU_STATUS_UPDATE";

export const toggleMenu = (status) => {
  return (dispatch) => {
    dispatch({ type: MENU_STATUS_UPDATE, payload: status });
  };
};
