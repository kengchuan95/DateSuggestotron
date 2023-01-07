import React from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

function App() {
  const dateCategories = [
    { label: 'Indoor', value: 'Indoor' },
    { label: 'Outdoor', value: 'Outdoor' },
    { label: 'Cooking', value: 'Cooking' },
    { label: 'Movies and TV', value: 'Videos' }
  ];

  return (
    <div className="App">
      <Header />
      <Button text="Get a date" />
      <TextInput />
      <SelectInput options={dateCategories} />
      <Button text="Add a date" />
    </div>
  );
}

export default App;
