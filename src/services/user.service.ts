import jwt_decode from 'jwt-decode';
import { $authHost, $host } from '../configs/api.config';

export const UserService = {
  async registration(
    avatar: string,
    name: string,
    sex: string,
    age: string,
    family_status: string,
    goal: string,
    orientation: string,
    height: string,
    work: string,
    education: string,
    languages: string,
    children: string,
    alcohol: string,
    zodiac: string,
    about: string,
    email: string,
    password: string
  ) {
    const { data } = await $host.post('api/user/registration', {
      avatar,
      name,
      sex,
      age,
      family_status,
      goal,
      orientation,
      height,
      work,
      education,
      languages,
      children,
      alcohol,
      zodiac,
      about,
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
