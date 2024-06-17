import React, { useState } from 'eact';
import { View, Text, TextInput, Button } from 'eact-native';

const ExpenseForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    onSubmit({ description, amount });
    setDescription('');
    setAmount('');
  };

  return (
    <View>
      <Text>Add New Expense</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ExpenseForm;