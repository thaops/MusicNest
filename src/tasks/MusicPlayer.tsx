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
import ImageSong from '../components/ImageSong'
import SpaceComponent from '../components/SpaceComponent'
import SeekBarComponent from '../components/SeekBarComponent'

const songList = [
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FAnNutNhoThaGiacMo.mp3?alt=media&token=4944fe1f-c969-487e-b0eb-d87101e7c417',
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FExitSign.mp3?alt=media&token=65f993a8-c0d8-4058-b019-87bfa45a30b0',
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FDanhDoi.mp3?alt=media&token=da884fe1-2568-4382-9e3c-9769d024e048'
];



const MusicPlayer = () => {
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
        <SpaceComponent height={30}/>
        <SectionComponent>
            <ImageSong/>
        </SectionComponent>
        <SpaceComponent height={30}/>
        <SectionComponent>
            <RowComponent justify='space-between'styles={{alignItems:'flex-start'}}>
                <View>
                    <TextComponent text='Alien' size={20} font={fontFamilys.bold}/>
                    <TextComponent text='Rema' size={14}/>
                </View>
                <Heart size="32" color={colors.violet}/>
            </RowComponent>
        </SectionComponent>
        <SpaceComponent height={10}/>
        <SectionComponent>
            <PlayCommponent songList={songList}/>
        </SectionComponent>
        <SpaceComponent height={30}/>
        <SectionComponent>
            <RowComponent justify='space-between' >
            <Music size="32" color={colors.violet}/>
            <ArrowSquareUp size="32" color={colors.violet}/>
            </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default MusicPlayer