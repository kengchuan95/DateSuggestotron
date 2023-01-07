import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Button from './Button';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateIdea from './DateIdea';

import { getDates, addDate } from './dateHelpers';

function App() {
  const [suggestedDate, setSuggestedDate] = useState({});
  const [dateIdea, setDateIdea] = useState('');
  const [dateCategory, setDateCategory] = useState('');

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

  const addDateHandler = async () => {
    await addDate(dateIdea, dateCategory);
    setDateIdea('');
    setDateCategory('');
  }

  return (
    <div className="App">
      <Header />
      <Button text="Get a date" onClick={getDateHandler} />
      <DateIdea info={suggestedDate} />
      <TextInput
        value={dateIdea}
        onChange={setDateIdea}
        placeholder="Enter a date idea"
      />
      <SelectInput
        value={dateCategory}
        onChange={setDateCategory}
        options={dateCategories}
        placeholder="Select a category"
      />
      <Button text="Add a date" onClick={addDateHandler} />
    </div>
  );
}

export default App;
