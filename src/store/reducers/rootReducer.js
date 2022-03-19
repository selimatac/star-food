import { combineReducers } from "redux";
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  order: orderReducer,
  firebase,
  firestore: firestoreReducer
});

export default rootReducer;
