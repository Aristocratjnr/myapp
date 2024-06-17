import React from 'eact';
import { View, Text, FlatList } from 'eact-native';

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