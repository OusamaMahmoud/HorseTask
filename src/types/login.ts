export type LoginForm = {
  email: string;
  password: string;
};
export type LoginResponse = {
  data: {
    token: string;
  };
};
