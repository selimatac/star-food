import { MENU_STATUS_UPDATE } from "../actions/themeActions";

const initState = {
  isShow: window.innerWidth > 1024,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case MENU_STATUS_UPDATE:
      return { isShow: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
