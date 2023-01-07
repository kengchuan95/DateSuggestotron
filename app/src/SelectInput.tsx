import React from 'react';

type SelectInputOption = {
  value: string;
  label: string;
}

type SelectInputProps = {
  options: Array<SelectInputOption>
}

function SelectInput({ options }: SelectInputProps) {
  return (
    <select>
      {options.map((option: SelectInputOption) =>
        <option value={option.value}>{option.label}</option>
      )}
    </select>
  );
}

export default SelectInput;
