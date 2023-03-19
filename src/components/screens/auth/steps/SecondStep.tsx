import { Button, SelectChangeEvent, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveStep } from '../../../../store/reducers/registrationSlice';
import AppSelect from '../../../UI/AppSelect';
import cl from './Steps.module.scss';

const SecondStep = () => {
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();

  const [orientation, setOrientation] = useState(
    localStorage.getItem('orientation') || ''
  );
  const [height, setHeight] = useState(localStorage.getItem('height') || '');
  const [work, setWork] = useState(localStorage.getItem('work') || '');
  const [education, setEducation] = useState(
    localStorage.getItem('education') || ''
  );
  const [languages, setLanguages] = useState(
    localStorage.getItem('languages') || ''
  );
  const [children, setChildren] = useState(
    localStorage.getItem('children') || ''
  );
  const [alcohol, setAlcohol] = useState(localStorage.getItem('alcohol') || '');
  const [zodiac, setZodiac] = useState(localStorage.getItem('zodiac') || '');
  const [about, setAbout] = useState(localStorage.getItem('about') || '');

  const handleOrientation = (event: SelectChangeEvent) => {
    setOrientation(event.target.value as string);
  };
  const handleChildren = (event: SelectChangeEvent) => {
    setChildren(event.target.value as string);
  };
  const handleAlcohol = (event: SelectChangeEvent) => {
    setAlcohol(event.target.value as string);
  };
  const handleZodiac = (event: SelectChangeEvent) => {
    setZodiac(event.target.value as string);
  };

  const handleNext = () => {
    localStorage.setItem('orientation', orientation);
    localStorage.setItem('height', height);
    localStorage.setItem('work', work);
    localStorage.setItem('education', education);
    localStorage.setItem('languages', languages);
    localStorage.setItem('children', children);
    localStorage.setItem('alcohol', alcohol);
    localStorage.setItem('zodiac', zodiac);
    localStorage.setItem('about', about);
    dispatch(setActiveStep(activeStep + 1));
  };

  const handleBack = () => {
    localStorage.setItem('orientation', orientation);
    localStorage.setItem('height', height);
    localStorage.setItem('work', work);
    localStorage.setItem('education', education);
    localStorage.setItem('languages', languages);
    localStorage.setItem('children', children);
    localStorage.setItem('alcohol', alcohol);
    localStorage.setItem('zodiac', zodiac);
    localStorage.setItem('about', about);
    dispatch(setActiveStep(activeStep - 1));
  };
  return (
    <form className={cl.form}>
      <AppSelect
        value={orientation}
        variant='outlined'
        label='Ориентация'
        labelId='orientation'
        options={['Традиционная', 'Гей/Лесбиянка', 'Другое']}
        onChange={handleOrientation}
      />
      <TextField
        variant='outlined'
        name='height'
        label='Рост'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <TextField
        variant='outlined'
        name='work'
        label='Работа'
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <TextField
        variant='outlined'
        name='education'
        label='Образование'
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <TextField
        variant='outlined'
        name='languages'
        label='Языки'
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
      />
      <AppSelect
        value={children}
        variant='outlined'
        label='Дети'
        labelId='children'
        options={['Нет', 'Не планирую', 'В ближайшее время', 'Уже есть']}
        onChange={handleChildren}
      />
      <AppSelect
        value={alcohol}
        variant='outlined'
        label='Алкоголь'
        labelId='alcohol'
        options={['Да', 'Нет', 'Редко']}
        onChange={handleAlcohol}
      />
      <AppSelect
        value={zodiac}
        variant='outlined'
        label='Знак Зодиака'
        labelId='zodiac'
        options={[
          'Овен',
          'Телец',
          'Близнецы',
          'Рак',
          'Лев',
          'Дева',
          'Весы',
          'Скорпион',
          'Змееносец',
          'Стрелец',
          'Козерог',
          'Водолей',
          'Рыбы',
        ]}
        onChange={handleZodiac}
      />
      <TextField
        variant='outlined'
        name='about'
        label='О себе'
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <Button onClick={handleBack} variant='outlined'>
        Назад
      </Button>
      <Button onClick={handleNext} variant='outlined'>
        Далее
      </Button>
    </form>
  );
};

export default SecondStep;
