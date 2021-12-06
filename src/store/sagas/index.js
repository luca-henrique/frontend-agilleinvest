// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../ducks/auth";
import { signIn, signOut, createAccount } from "./auth";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.CREATE_USER_REQUEST, createAccount),
  ]);
}
