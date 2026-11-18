
import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === '' || num2 === '') {
      setResult('Enter both numbers');
      return;
    }

    let answer;

    switch (operator) {
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      case '*':
        answer = a * b;
        break;
      case '/':
        answer = b === 0 ? 'Cannot divide by zero' : a / b;
        break;
      default:
        return;
    }

    setResult(answer);
  };

  return (
    <div className="container">
      <h1>Mini Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>

      <h2>Result: {result ?? '-'}</h2>
    </div>
  );
}

export default App;
