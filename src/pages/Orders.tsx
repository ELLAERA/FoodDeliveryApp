import React, {useCallback} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';
import {Order} from '../slices/order';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const toggleDetail = useCallback(() => {}, []);
  const renderItem = useCallback(
    ({item}: {item: Order}) => {
      return (
        <View key={item.orderId} style={styles.orderContainer}>
          <Pressable onPress={toggleDetail} style={styles.info}>
            <Text style={styles.eachInfo}>
              ￦ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </Pressable>
        </View>
      );
    },
    [toggleDetail],
  );
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.orderId}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  info: {
    flexDirection: 'row',
  },
  eachInfo: {
    flex: 1,
  },
});
export default Orders;
