import { takeLatest, call, put, StrictEffect } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { login, loginSuccess, loginFailure } from './authSlice';
import { login as loginService } from '../services/authService';

interface LoginActionPayload {
  username: string;
  password: string;
}

function* handleLogin(action: PayloadAction<LoginActionPayload>): Generator<StrictEffect, void, string> {
  try {
    const token: string = yield call(loginService, action.payload);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure());
    console.error('Login failed', error);
  }
}

export default function* authSaga(): Generator {
  yield takeLatest(login.type, handleLogin);
}
