import { API_BASE_URL } from '@constants/';
import {
  CreateUserType,
  ForgotPasswordForm,
  LoginUserType,
  AddUserPayment,
  ResetPasswordForm,
  UserProfile,
  ChangePasswordForm
} from '@type/Users';
import { tokenAuthHeaders } from '@utils/common';

function createUser(payload: CreateUserType) {
  return fetch(`${API_BASE_URL}/auth/local/register`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function login(payload: LoginUserType) {
  return fetch(`${API_BASE_URL}/auth/local`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function forgotPass(payload: ForgotPasswordForm) {
  return fetch(`${API_BASE_URL}/auth/forgot-password`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function resetPass(payload: ResetPasswordForm) {
  return fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function sendConfirmEmail(payload: ForgotPasswordForm) {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/auth/send-email-confirmation`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers
  });
}

function addPaymentMethod(payload: AddUserPayment) {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/app/users/post-billing`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers
  });
}

function fetchProfile() {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/users/me`, {
    method: 'get',
    headers
  });
}

function updateProfile(payload: UserProfile) {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/users/me`, {
    method: 'put',
    body: JSON.stringify(payload),
    headers
  });
}

function uploadLogo(payload: FormData) {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/upload`, {
    method: 'post',
    body: payload,
    headers: {
      Authorization: headers.Authorization
    }
  });
}

function changePassword(payload: ChangePasswordForm) {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/password`, {
    method: 'put',
    body: JSON.stringify(payload),
    headers
  });
}

function getOverallRecord() {
  const headers = tokenAuthHeaders();
  return fetch(`${API_BASE_URL}/app/users/overall-record`, {
    method: 'get',
    headers
  });
}

export default {
  createUser,
  login,
  forgotPass,
  resetPass,
  sendConfirmEmail,
  addPaymentMethod,
  fetchProfile,
  updateProfile,
  uploadLogo,
  changePassword,
  getOverallRecord
};
