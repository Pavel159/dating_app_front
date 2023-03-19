import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  activeStep: number;
  //  setActiveStep: () => void,
}

const initialState: RegistrationState = {
  activeStep: 0,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setActiveStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload;
    },
  },
});

export default registrationSlice.reducer;
export const { setActiveStep } = registrationSlice.actions;
