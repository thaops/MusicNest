import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import SpaceComponent from './SpaceComponent';
import { colors } from '../constants/colors';



interface Props{
  dataList?:Array<{id?:string,uri?:string,title?:string}>
}
const renderItem = ({ item }) => (
  <View key={item.id} style={{}}>
    <View style={styles.itemContainer} >
      <Image source={{ uri: item.uri }} style={styles.image} />
      <SpaceComponent width={6}/>
      <Text style={[globalStyles.text, styles.title]}>{item.title}</Text>
      <SpaceComponent width={6}/>
  </View>
  </View>
);

const ItemList = (props:Props) => {
  const {dataList} = props
  return (
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.gray,
    margin:8, 
    
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 5,

  },
  title: {
    marginTop: 5,
    fontSize: 12,
    
  },
  row: {
    justifyContent: 'center',
  },
});

export default ItemList;
