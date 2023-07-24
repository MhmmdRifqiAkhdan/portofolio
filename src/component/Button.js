import React, { useState } from 'react';
// import Contact from './Contact';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={handleClick}>Let's Go</button>
      {showForm && <Form />}
    </>
  );
};

export default App;
