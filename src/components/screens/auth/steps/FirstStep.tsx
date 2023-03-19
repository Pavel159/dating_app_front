import {
  Button,
  ButtonGroup,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveStep } from '../../../../store/reducers/registrationSlice';
import AppSelect from '../../../UI/AppSelect';
import cl from './Steps.module.scss';

const FirstStep = () => {
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [age, setAge] = useState(localStorage.getItem('age') || '');
  const [sex, setSex] = useState(localStorage.getItem('sex') || '');
  const [familyStatus, setFamilyStatus] = useState(
    localStorage.getItem('familyStatus') || ''
  );

  const handleSex = (e: any) => {
    setSex(e.target.innerText);
  };

  const handleFamilyStatus = (event: SelectChangeEvent) => {
    setFamilyStatus(event.target.value as string);
  };

  const info = {
    name: name,
    age: age,
    sex: sex,
    familyStatus: familyStatus,
  };

  const handleNext = () => {
    console.log(info);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('sex', sex);
    localStorage.setItem('familyStatus', familyStatus);
    dispatch(setActiveStep(activeStep + 1));
  };
  return (
    <form className={cl.form}>
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
      <Button onClick={handleNext} variant='outlined'>
        Далее
      </Button>
    </form>
  );
};

export default FirstStep;
