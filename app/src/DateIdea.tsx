import React from 'react';

type DateIdeaProps = {
  info: { DateIdea?: string; DateCategory?: string; }
}

function DateIdea({ info }: DateIdeaProps) {
  return (
    <>
      {info.DateIdea && info.DateCategory && (
        <div>
          <div>Try this!</div>
          <div>Category: {info.DateCategory}</div>
          <div>Idea: {info.DateIdea}</div>
        </div>
      )}
    </>
  );
}

export default DateIdea;
