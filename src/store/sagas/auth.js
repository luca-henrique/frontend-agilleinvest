import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { toastr } from "react-redux-toastr";
import axios from "axios";
import api from "~/service/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(
      axios.post("http://plataforma.agilleinvest.com.br/api/api-token", {
        email,
        password,
      })
    );
    localStorage.setItem("@Agille:token", data.token);
    yield put(AuthActions.signInSuccess(data.token));
  } catch (err) {
    console.log(err);
  }
}

export function* createAccount({ user }) {
  try {
    console.log(user);
    const { data } = yield call(api.post, "/registro_usuario", user);
  } catch (err) {
    console.log(err);
  }
}

export function* signOut() {
  localStorage.removeItem("@Agille:token");

  yield put(push("/entrar"));
}
