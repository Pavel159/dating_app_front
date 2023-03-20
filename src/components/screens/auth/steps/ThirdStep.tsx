import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { UserService } from '../../../../services/user.service';
import { setActiveStep } from '../../../../store/reducers/registrationSlice';
import { setAuth, setUserInfo } from '../../../../store/reducers/userSlice';
import cl from './Steps.module.scss';

const ThirdStep = () => {
  const navigate = useNavigate();
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    localStorage.setItem('email', email);
    dispatch(setActiveStep(activeStep - 1));
  };

  let user = {
    avatar: localStorage.getItem('avatarPreview') || '',
    name: localStorage.getItem('name') || '',
    sex: localStorage.getItem('sex') || '',
    age: localStorage.getItem('age') || '',
    familyStatus: localStorage.getItem('familyStatus') || '',
    goal: localStorage.getItem('goal') || '',
    orientation: localStorage.getItem('orientation') || '',
    height: localStorage.getItem('height') || '',
    work: localStorage.getItem('work') || '',
    education: localStorage.getItem('education') || '',
    languages: localStorage.getItem('languages') || '',
    children: localStorage.getItem('children') || '',
    alcohol: localStorage.getItem('alcohol') || '',
    zodiac: localStorage.getItem('zodiac') || '',
    about: localStorage.getItem('about') || '',
    email: email,
    password: password,
  };
  let { password: _, ...userInfo } = user;

  console.log(user);

  const handleFinish = async () => {
    let data: any;
    const {
      avatar,
      name,
      sex,
      age,
      familyStatus,
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
    } = user;
    try {
      data = await UserService.registration(
        avatar,
        name,
        sex,
        age,
        familyStatus,
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
        password
      );
      let keysToRemove = [
        'avatar',
        'name',
        'sex',
        'age',
        'familyStatus',
        'goal',
        'orientation',
        'height',
        'work',
        'education',
        'languages',
        'children',
        'alcohol',
        'zodiac',
        'about',
        'email',
        'avatarPreview',
      ];
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      // dispatch(setUserInfo(userInfo));
      dispatch(setAuth(true));
      navigate('/registration-success');
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message);
    }
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

      <Button onClick={handleFinish} variant='contained' color='success'>
        Завершить
      </Button>
      <Button onClick={handleBack} variant='outlined'>
        Назад
      </Button>
    </form>
  );
};

export default ThirdStep;
