import React from 'react';
import Counter from './components/Counter';
import ToDo from './components/ToDo';

const App = () => {
  return (
    <div>
      <h1>Redux App</h1>
      <Counter />
      <hr />
      <ToDo />
    </div>
  );
};

export default App;