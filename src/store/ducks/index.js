import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastr } from "react-redux-toastr";
import { reducer as auth } from "./auth";
import banner from "./banner";

export default (history) =>
  combineReducers({
    toastr,

    auth,
    banner,

    router: connectRouter(history),
  });
