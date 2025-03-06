export interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  isProfessor: boolean;
}

export interface RegisterResponse {
  message: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginPhonePayload {
  phone: string;
}

export interface LoginResponse {
  message: boolean;
}
