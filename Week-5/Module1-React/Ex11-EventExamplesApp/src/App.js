import React from 'react';
import Counter from './Components/Counter';
import MessageButtons from './Components/MessageButtons';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <Counter />
      <MessageButtons />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
