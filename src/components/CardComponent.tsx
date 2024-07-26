import { View, Text, FlatList, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import TextComponent from './TextComponent';
import { fontFamilys } from '../constants/fontFamily';
import { colors } from '../constants/colors';
import SpaceComponent from './SpaceComponent';

interface Props {
  children?: ReactNode,
  title?: string,
  customStyles?: StyleProp<ViewStyle>,
  dataList: Array<{ _id: string, Image: string, title: string }>,
}


const renderItem = ({ item }) => (
  <View key={item.id} style={styles.itemContainer}>
    <Image source={{ uri: item.Image }} style={styles.image} />
    <SpaceComponent height={6}/>
    <TextComponent text={item.title} size={12}/>
  </View>
);

const CardComponent = (props: Props) => {
  const { children, title, customStyles, dataList } = props;
  return (
    <View style={[styles.container, customStyles]}>
      <TextComponent text={title ? title : 'Âm nhạc'} size={16} font={fontFamilys.bold} />
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 18,
  },
  image: {
    width: 139,
    height: 139,
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  listContainer: {
    paddingVertical: 10,
  },
});

export default CardComponent;
