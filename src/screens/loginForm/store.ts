import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { ApiClient } from '../../api';

class FormState {
  _inputs = {
    email: '',
    pass: '',
  };

  client = new ApiClient();

  constructor() {
    makeAutoObservable(this);
  }

  set email(email: string) {
    this._inputs.email = email;
  }

  set pass(pass: string) {
    this._inputs = {
      ...this._inputs,
      pass,
    };
  }

  get email() {
    return this._inputs.email;
  }

  get pass() {
    return this._inputs.pass;
  }

  login() {
    this.client.FETCH_USER_WITH_CREDENTIALS(this.email, this.pass);
  }
}

export const FormStateContext = createContext(new FormState());
export const FormStateProvider = FormStateContext.Provider;

export const useFormState = () => useContext(FormStateContext);
