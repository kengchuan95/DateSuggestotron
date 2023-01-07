import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Button from './Button';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateIdea from './DateIdea';

import { getDates } from './dateHelpers';

function App() {
  const [suggestedDate, setSuggestedDate] = useState({});

  const dateCategories = [
    { label: 'Indoor', value: 'Indoor' },
    { label: 'Outdoor', value: 'Outdoor' },
    { label: 'Cooking', value: 'Cooking' },
    { label: 'Movies and TV', value: 'Videos' }
  ];

  const getDateHandler = async () => {
    const allDates = await getDates();
    setSuggestedDate(allDates.data[0]);
  }

  return (
    <div className="App">
      <Header />
      <Button text="Get a date" onClick={getDateHandler} />
      <DateIdea info={suggestedDate} />
      <TextInput />
      <SelectInput options={dateCategories} />
      {/* <Button text="Add a date" /> */}
    </div>
  );
}

export default App;
