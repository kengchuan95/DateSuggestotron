import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Button from './Button';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import {selectDate} from './dateMath';
import { getDates } from './dateHelpers';

function App() {
  const [dateIdea, setDateIdea] = useState({ DateIdea: '', DateCategory: '', Status: '' });

  const dateCategories = [
    { label: 'Indoor', value: 'Indoor' },
    { label: 'Outdoor', value: 'Outdoor' },
    { label: 'Cooking', value: 'Cooking' },
    { label: 'Movies and TV', value: 'Videos' }
  ];

  const getDateHandler = async () => {
    const allDates = await getDates();
    const selectedDate = await selectDate();
    setDateIdea(selectedDate);
  }

  return (
    <div className="App">
      <Header />
      <Button text="Get a date" onClick={getDateHandler} />
      <div>{dateIdea?.DateIdea}</div>
      <TextInput />
      <SelectInput options={dateCategories} />
      {/* <Button text="Add a date" /> */}
    </div>
  );
}

export default App;
