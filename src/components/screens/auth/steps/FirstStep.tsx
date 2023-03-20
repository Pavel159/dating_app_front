import {
  Button,
  ButtonGroup,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar-edit';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveStep } from '../../../../store/reducers/registrationSlice';
import AppSelect from '../../../UI/AppSelect';
import cl from './Steps.module.scss';

const FirstStep = () => {
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();

  const [avatarSrc, setAvatarSrc] = useState(
    localStorage.getItem('avatarSrc') || ''
  );
  const [avatarPreview, setAvatarPreview] = useState(
    localStorage.getItem('avatarPreview') || ''
  );
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [age, setAge] = useState(localStorage.getItem('age') || '');
  const [sex, setSex] = useState(localStorage.getItem('sex') || '');
  const [familyStatus, setFamilyStatus] = useState(
    localStorage.getItem('familyStatus') || ''
  );
  const [goal, setGoal] = useState(localStorage.getItem('goal') || '');

  const handleSex = (e: any) => {
    setSex(e.target.innerText);
  };

  const handleFamilyStatus = (event: SelectChangeEvent) => {
    setFamilyStatus(event.target.value as string);
  };

  const handleGoal = (event: SelectChangeEvent) => {
    setGoal(event.target.value as string);
  };

  const handleNext = () => {
    localStorage.setItem('avatarPreview', avatarPreview);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('sex', sex);
    localStorage.setItem('familyStatus', familyStatus);
    localStorage.setItem('goal', goal);
    localStorage.setItem('step', '1');
    dispatch(setActiveStep(activeStep + 1));
  };

  const onClose = () => {
    setAvatarPreview('');
  };

  const onCrop = (view: any) => {
    setAvatarSrc(avatarSrc);
    setAvatarPreview(view);
  };

  useEffect(() => {
    console.log(avatarPreview);
  }, [avatarPreview]);

  return (
    <form className={cl.form}>
      <div className={cl.avatar}>
        <Avatar
          width={200}
          height={200}
          onCrop={onCrop}
          onClose={onClose}
          src={avatarSrc}
          label='Загрузите аватар'
        />
        {avatarPreview && (
          <div className={cl.avatarPreview}>
            <img src={avatarPreview} alt='Image' />
          </div>
        )}
      </div>
      <TextField
        variant='outlined'
        name='name'
        label='Имя'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ButtonGroup
        disableElevation
        variant='contained'
        aria-label='outlined primary button group'>
        <Button
          onClick={handleSex}
          variant={sex === 'МУЖСКОЙ' ? 'contained' : 'outlined'}>
          Мужской
        </Button>
        <Button
          onClick={handleSex}
          variant={sex === 'ЖЕНСКИЙ' ? 'contained' : 'outlined'}
          color='secondary'>
          Женский
        </Button>
      </ButtonGroup>
      <TextField
        variant='outlined'
        name='age'
        label='Возраст'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <AppSelect
        value={familyStatus}
        variant='outlined'
        label='Семья'
        labelId='family'
        options={['Свободен/a', 'Женат/Замужем', 'В отношениях']}
        onChange={handleFamilyStatus}
      />
      <AppSelect
        value={goal}
        variant='outlined'
        label='Цель'
        labelId='goal'
        options={['Общение', 'Отношения', 'Завести семью', 'Дружба']}
        onChange={handleGoal}
      />
      <Button onClick={handleNext} variant='contained'>
        Далее
      </Button>
    </form>
  );
};

export default FirstStep;
