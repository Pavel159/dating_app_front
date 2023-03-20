import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setActiveStep } from '../../../store/reducers/registrationSlice';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';

function getSteps() {
  return ['Шаг 1', 'Шаг 2', 'Шаг 3'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <FirstStep />
        </div>
      );
    case 1:
      return (
        <div>
          <SecondStep />
        </div>
      );
    case 2:
      return (
        <div>
          <ThirdStep />
        </div>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  // const [step, setStep] = useState(Number(localStorage.getItem('step')) || 0);
  const { activeStep } = useAppSelector((state) => state.registrationReducer);
  const dispatch = useAppDispatch();
  const steps = getSteps();

  const handleReset = () => {
    dispatch(setActiveStep(0));
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <h2>{label}</h2>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            {/* <div className='container'>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
