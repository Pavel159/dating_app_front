import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

interface SelectProps {
  onChange?: (e: any) => void;
  label: string;
  variant: any;
  options: Array<string>;
  value?: string;
  id?: string;
  labelId?: string;
}

const AppSelect: React.FC<SelectProps> = ({
  onChange,
  label,
  variant,
  options,
  value,
  id,
  labelId,
}) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          onChange={onChange}
          variant={variant}
          label={label}
          value={value}
          labelId={labelId}>
          {options?.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default AppSelect;
