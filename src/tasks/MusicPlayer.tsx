import { View, Text } from 'react-native'
import React from 'react'
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


const ListSong = [
    {
        "Image": "https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageSonTung.png?alt=media&token=d9be7a8f-568d-46f7-850c-d0f43036e55d",
        "song": "https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FAnNutNhoThaGiacMo.mp3?alt=media&token=4944fe1f-c969-487e-b0eb-d87101e7c417",
        "title": "Son Tung",
        "nameSong": "Nơi này có anh"
    },
    {
        "Image": "https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Image%2FAlbumImageObito.png?alt=media&token=908dae19-c536-4c4e-83d8-4f3a66a26cba",
        "song": "https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FDanhDoi.mp3?alt=media&token=da884fe1-2568-4382-9e3c-9769d024e048",
        "title": "ObiTo",
        "nameSong": "Đánh đỗi"
    }
];

const MusicPlayer = ({ route }: any) => {
    const { song } = route.params;
    const NewListSong = [song,...ListSong];

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
                <PlayCommponent songList={NewListSong.map(s => ({ song: s.song, nameSong: s.nameSong, Image: s.Image,title:s.title }))} />
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