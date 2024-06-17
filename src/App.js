import React, { useState } from 'eact';
import { View, Text } from 'react-native';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Rent', amount: 1000 },
    { id: 2, description: 'Groceries', amount: 500 },
    { id: 3, description: 'Transportation', amount: 200 },
  ]);

  const handleSubmit = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <View>
      <Text>Expense Tracker</Text>
      <ExpenseList expenses={expenses} />
      <ExpenseForm onSubmit={handleSubmit} />
    </View>
  );
};

export default App;