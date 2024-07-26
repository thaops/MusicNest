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


const MusicPlayer = ({route}) => {
    const {song} = route.params;
    
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
            <ImageSong UrlImageSong={song.Image}/>
        </SectionComponent>
        <SpaceComponent height={30}/>
        <SectionComponent>
            <RowComponent justify='space-between'styles={{alignItems:'flex-start'}}>
                <View>
                    <TextComponent text={song.nameSong} size={20} font={fontFamilys.bold}/>
                    <TextComponent text={song.title} size={14}/>
                </View>
                <Heart size="32" color={colors.violet}/>
            </RowComponent>
        </SectionComponent>
        <SpaceComponent height={10}/>
        <SectionComponent>
            <PlayCommponent songList={[song.song]}/>
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