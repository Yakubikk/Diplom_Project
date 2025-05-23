export interface User {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    patronymic: string;
    imageAvatar: string;
    isProfessor: boolean;
}

export interface RegisterPayload {
  firstname: string;
  lastname: string;
  patronymic: string;
  email: string;
  password: string;
  tel?: string;
  terms: boolean;
  isProfessor: boolean;
}

export interface RegisterResponse {
  id: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginPhonePayload {
  phone: string;
}

export interface LoginResponse {
  id: string;
}

export interface LoginPhoneResponse {
  code: string;
}

export interface LoginCodePayload {
  code: string;
  phone: string;
}

export interface LoginCodeResponse {
  id: string;
}

export interface JoinClassPayload {
  classId: string;
}

export interface JoinClassResponse {
  id: string;
}
