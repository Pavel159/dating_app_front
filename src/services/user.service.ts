import jwt_decode from 'jwt-decode';
import { $authHost, $host } from '../configs/api.config';

export const UserService = {
  async registration(name: string, email: string, password: string) {
    const { data } = await $host.post('api/user/registration', {
      name,
      email,
      password,
      role: 'USER',
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.id);
    return jwt_decode(data.token);
  },
  async login(email: string, password: string) {
    const { data } = await $host.post('api/user/login', {
      email,
      password,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.id);
    return jwt_decode(data.token);
  },
  async check() {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  },
};
