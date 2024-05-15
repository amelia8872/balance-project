import React, {useState, useEffect} from 'react';
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


  const calculateTotal = (type) => {
    return entries[type].reduce((acc, curr) => acc + curr.amount, 0);
  };

  const balance = calculateTotal('income') - calculateTotal('expense');


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
    // console.log('Add Entry');

    // let entries = {
    //   income: [{ description: 'Salary', amount: 5000, id: 1 }],
    //   expense: [{ description: 'Rent', amount: 1200, id: 2 }]
    // };

    // let type = 'income';
    // let newEntry = { description: 'Bonus', amount: 1200, id:3 };

    // console.log('Original:', entries);

    const newEntry = {
      description: description,
      amount: parseFloat(amount),
      id: Date.now()
    };

    setEntries({
      ...entries,
      [type]:[...entries[type], newEntry]
    });

    setDescription('');
    setAmount('');
  }

  const handleDelete = (type, id) => {
    setEntries({
      ...entries,
      [type]: entries[type].filter(entry => entry.id !==id)
    });
  }

  useEffect(() => {
    console.log('Entries:', entries);
  }, [entries]);

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
        <ListEntries entries={entries.income} type="income" onDelete={handleDelete} />
        <ListEntries entries={entries.expense} type="expense" onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
