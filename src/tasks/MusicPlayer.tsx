import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../constants/colors'
import ContainerComponent from '../components/ContainerComponent'
import PlayCommponent from '../components/PlayCommponent'
import RowComponent from '../components/RowComponen'
import TextComponent from '../components/TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { ArrowDown2, ArrowSquareUp, Heart, Home, More, Music } from 'iconsax-react-native'
import { fontFamilys } from '../constants/fontFamily'
import SectionComponent from '../components/SectionComponent'
import SpaceComponent from '../components/SpaceComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewListSongs } from '../slices/NewListSong'

const MusicPlayer = ({ route }: any) => {
    const { song } = route.params;
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.NewListSong || { data: [], loading: false, error: null });
    
    useEffect(() => {
      dispatch(fetchNewListSongs());
    }, [dispatch]);
    const NewListSong = [song,...data];
    const uniqueSongs = NewListSong.filter((value, index, self) =>
        index === self.findIndex((t) => t._id === value._id)
    );

    return (
        <ContainerComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <ArrowDown2 size={24} color={colors.decs} strokeWidth={2}/>
                    <View>
                        <TextComponent text='“Top 100 Nigeria”' font={fontFamilys.bold}/>
                    </View>
                    <More size="24" color={colors.decs} strokeWidth={2}/>
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <PlayCommponent songList={uniqueSongs.map(s => ({ song: s.song, nameSong: s.nameSong, Image: s.Image,title:s.title }))} />
            </SectionComponent>
            <SpaceComponent height={30}/>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <Music size="32" color={colors.violet}/>
                    <ArrowSquareUp size="32" color={colors.violet}/>
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
}

export default MusicPlayer;