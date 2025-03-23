import React, { useState } from 'react';

const App = () => {
  // Declare a state variable to hold the value
  const [value, setValue] = useState('Initial Value');

  // Function to change the value
  const changeValue = () => {
    setValue('New Value');
  };

  return (
    <div>
      {/* Display the current value in a div */}
      <div>{value}</div>
      {/* Button to change the value */}
      <button onClick={changeValue}>Change Value</button>
    </div>
  );
};

export default App;
