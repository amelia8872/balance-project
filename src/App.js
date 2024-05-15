import React, {useState} from 'react';
import './App.css';
import ListEntries from './ListEntries';

function App() {


  const [entries, setEntries] = useState({
    income: [],
    expense: []
  })

  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const balance = 0;


  const handleTypeChange = (event) => {
    // console.log(event.target.value);
    setType(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    // console.log(event.target.value);
    setDescription(event.target.value);
  }

  const handleAmountChange = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  }

  const handleAddEntry = () => {
    console.log('Add Entry');

    let entries = {
      income: [{ description: 'Salary', amount: 5000, id: 1 }],
      expense: [{ description: 'Rent', amount: 1200, id: 2 }]
    };

    let type = 'income';
    let newEntry = { description: 'Bonus', amount: 1200, id:3 };

    console.log('Original:', entries);

    entries = {
      ...entries,
      [type]:[...entries[type], newEntry]
    };

    console.log('Updated:', entries);
  }

  return (
    <div>
      <div>
        <label>Balance: ${balance}</label>
      </div>

      <div>
        <select value={type} onChange={handleTypeChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
        <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
        <button onClick={handleAddEntry}>Add</button>
      </div>

      <div>
        <ListEntries entries={entries.income} />
        <ListEntries entries={entries.expense} />
      </div>
    </div>
  );
}

export default App;
