import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveStep } from '../../../../store/reducers/registrationSlice';
import cl from './Steps.module.scss';

const ThirdStep = () => {
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(
    localStorage.getItem('password') || ''
  );

  const handleBack = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    dispatch(setActiveStep(activeStep - 1));
  };

  const handleFinish = () => {
    alert('Регистрация окончена');
  };
  return (
    <form className={cl.form}>
      <TextField
        variant='outlined'
        name='email'
        label='Эл. почта'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant='outlined'
        name='password'
        label='Пароль'
        value={password}
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleBack} variant='outlined'>
        Назад
      </Button>
      <Button onClick={handleFinish} variant='outlined'>
        Готово
      </Button>
    </form>
  );
};

export default ThirdStep;
