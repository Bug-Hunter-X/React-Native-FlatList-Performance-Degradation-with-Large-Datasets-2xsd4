//FlatListBugSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ key: i.toString(), value: `Item ${i}` }));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.value}</Text>
  </View>
);

const ItemSeparator = () => (
  <View style={styles.separator} />
);

const FlatListExample = () => {
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      ItemSeparatorComponent={ItemSeparator}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index,
      })}
    />
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});