import React from 'react';

type SelectInputOption = {
  value: string;
  label: string;
}

type SelectInputProps = {
  value: string;
  onChange: Function;
  options: Array<SelectInputOption>;
  placeholder?: string;
}

function SelectInput({ value, onChange, options, placeholder }: SelectInputProps) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="" disabled>{placeholder}</option>
      {options.map((option: SelectInputOption) =>
        <option key={option.value} value={option.value}>{option.label}</option>
      )}
    </select>
  );
}

export default SelectInput;
