import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { UserService } from '../../../services/user.service';
import { setAuth, setUserInfo } from '../../../store/reducers/userSlice';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let data: any;
    let userInfo;
    try {
      data = await UserService.registration(
        user.name,
        user.email,
        user.password
      );
      userInfo = { name: user.name, email: user.email };
      dispatch(setUserInfo(userInfo));
      dispatch(setAuth(true));

      navigate('/');
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message);
    }
  };

  return (
    <form>
      <TextField
        id='outlined-basic'
        name='name'
        label='Имя'
        variant='outlined'
        value={user.name}
        onChange={handleInputChange}
      />
      <TextField
        id='outlined-basic'
        name='email'
        label='Эл. почта'
        variant='outlined'
        value={user.email}
        onChange={handleInputChange}
      />
      <TextField
        id='outlined-basic'
        name='password'
        label='Пароль'
        variant='outlined'
        value={user.password}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit} variant='contained'>
        Продолжить
      </Button>
    </form>
  );
};

export default RegistrationForm;
