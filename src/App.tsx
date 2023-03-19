import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { UserService } from './services/user.service';
import { setAuth } from './store/reducers/userSlice';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter';

function App() {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      UserService.check().then((data: any) => {
        dispatch(setAuth(true));
      });
    }
  }, []);

  console.log(isAuth);
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
