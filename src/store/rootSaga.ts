import { all, fork } from 'redux-saga/effects';
import authSaga from '../domains/auth/store/authSaga';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
