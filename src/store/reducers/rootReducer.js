import { combineReducers } from "redux";
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import orderReducer from "./orderReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  order: orderReducer,
  theme: themeReducer,
  firebase,
  firestore: firestoreReducer,
});

export default rootReducer;
