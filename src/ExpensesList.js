import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => (
        <View>
          <Text>{item.description}</Text>
          <Text>{item.amount}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExpenseList;