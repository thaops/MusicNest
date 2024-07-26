// src/screens/ListSong.js
import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageComponent, TouchableOpacity } from 'react-native';
import ContainerComponent from '../components/ContainerComponent';
import SectionComponent from '../components/SectionComponent';
import RowComponent from '../components/RowComponen';
import { ArrowLeft, Brodcast, Heart, Play, Spotify } from 'iconsax-react-native';
import ImageSong from '../components/ImageSong';
import SpaceComponent from '../components/SpaceComponent';
import TextComponent from '../components/TextComponent';
import { fontFamilys } from '../constants/fontFamily';
import { colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListSongs } from '../slices/ListSongSlices';


const ListSong = ({route,navigation}:any) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.ListSong || { data: [], loading: false, error: null });
  console.log('Data from store:', data);
  useEffect(()=>{
    if(id){
      dispatch(fetchListSongs(id));
    }
  },[id,dispatch])
  const handlePressSong = (item) => {
    navigation.navigate('MusicPlayer', { song: item });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>handlePressSong(item)} style={styles.itemContainer}>
      <RowComponent>
        <Image source={{ uri: item.Image }} style={styles.image} />
        <View style={styles.textContainer}>
          <TextComponent text={item.title} size={16} font={fontFamilys.bold} />
          <TextComponent text={item.nameSong} size={14} color={colors.gray} />
        </View>
        <Heart size="24" color={colors.violet} />
      </RowComponent>
    </TouchableOpacity>
  );
  return (
    <ContainerComponent>
      <SectionComponent>
        <RowComponent justify='center' styles={{ alignItems: 'flex-start' }}>
          <ArrowLeft size="24" color={colors.violet} />
          <ImageSong width='70%' height={230} />
          <SpaceComponent width={10} />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={20}/>
      <SectionComponent>
        <TextComponent text='Hôm nay Nghe gì' size={20} font={fontFamilys.bold} color='#fff' />
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
        <Spotify size="24" color={colors.violet}/>
        <SpaceComponent width={8}/>
        <TextComponent text='Spotify' font={fontFamilys.bold}/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <RowComponent>
          <Heart size="30" color={colors.violet}/>
          <SpaceComponent width={16}/>
          <Brodcast size="32" color={colors.violet}/>
          </RowComponent>
        <TouchableOpacity style={[globalStyles.play]}>
        <Play size="32" color={colors.violet}/>
        </TouchableOpacity>
        </RowComponent>
      </SectionComponent>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.bgColor,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.bgColor,

    overflow: 'hidden',

  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10

  },
  textContainer: {
    flex: 1,
  },
  songText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistText: {
    fontSize: 14,
    color: '#555',
  },
});

export default ListSong;
