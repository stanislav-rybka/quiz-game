import { $host } from "./index";


export const registration = async (email, password, nickname) => {
  const response = await $host.post('api/user/register', {
    email,
    password,
    nickname
  });

  return response;
}


export const login = async (email, password) => {
  const response = await $host.post('api/user/login', {
    email,
    password
  });

  return response;
}