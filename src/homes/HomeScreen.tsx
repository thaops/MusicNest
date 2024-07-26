import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import ContainerComponent from '../components/ContainerComponent'
import SectionComponent from '../components/SectionComponent'
import RowComponent from '../components/RowComponen'
import TextComponent from '../components/TextComponent'
import { colors } from '../constants/colors'
import { fontFamilys } from '../constants/fontFamily'
import { Notification, Setting } from 'iconsax-react-native'
import SpaceComponent from '../components/SpaceComponent'
import ItemList from '../components/ItemList'
import CardComponent from '../components/CardComponent'
import ChartsComponent from '../components/ChartsComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../slices/ItemHomNaySlices'


const imageList = [
  { id: '1', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', title: 'Hôm nay Nghe gì' },
  { id: '2', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', title: 'Hôm nay Nghe gì' },
  { id: '3', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', title: 'Hôm nay Nghe gì' },
  { id: '4', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', title: 'Hôm nay Nghe gì' },
];

const ChartsList = [
  { id: '1', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', song: 'Hôm nay Nghe gì', artist: 'HieuT2' },
  { id: '2', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', song: 'Hôm nay Nghe gì', artist: 'HieuT2' },
  { id: '3', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', song: 'Hôm nay Nghe gì', artist: 'HieuT2' },
  { id: '4', uri: 'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageHieuThuHai.png?alt=media&token=11701d91-526f-478b-be62-b569904efab7', song: 'Hôm nay Nghe gì', artist: 'HieuT2' },
];


const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.itemHomnay || { data: [], loading: false, error: null });

  useEffect(() => {
    console.log('Fetched data:', data);
  }, [data]);
  
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handlePress = (item) => {
    navigation.navigate('ListSong', { id: item._id });
  };

  return (
    <ContainerComponent>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextComponent text='For You' size={16} color={colors.press} font={fontFamilys.bold} />
            <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer')} style={{ flex: 1 }}>
              <TextComponent text='Trending' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Notification size="24" color={colors.decs} />
            <SpaceComponent width={16} />
            <Setting size="24" color={colors.decs} />
          </View>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        {loading ? (
          <ActivityIndicator size="large" color={colors.press} />
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : (
          <ItemList dataList={data} onPress={handlePress} />
        )}
      </SectionComponent>
      <SectionComponent>
        <CardComponent title="Artist" dataList={imageList} />
      </SectionComponent>
      <SectionComponent>
        <CardComponent title="Album" dataList={imageList} />
      </SectionComponent>
      <SectionComponent>
        <ChartsComponent dataCharts={ChartsList} />
      </SectionComponent>
    </ContainerComponent>
  );
};


export default HomeScreen