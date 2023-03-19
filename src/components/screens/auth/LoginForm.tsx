import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { UserService } from '../../../services/user.service';
import { setAuth } from '../../../store/reducers/userSlice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let data: any;
    try {
      data = await UserService.login(user.email, user.password);

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

export default LoginForm;
