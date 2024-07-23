import { View, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import RowComponent from './RowComponen';
import TextComponent from './TextComponent';
import { fontFamilys } from '../constants/fontFamily';
import { ArrowSquareDown, MusicPlaylist } from 'iconsax-react-native';
import { colors } from '../constants/colors';
import SectionComponent from './SectionComponent';
import SpaceComponent from './SpaceComponent';

interface Props {
    title?: string,
    dataCharts?:Array<{id:string, uri:string,song:string, artist: string}>
}



const renderItem = ({ item }) => (
    <View key={item.id} style={styles.itemContainer}>
        <RowComponent justify='space-between'>
            <RowComponent justify='flex-start'>
                <Image source={{ uri: item.uri }} style={styles.image} />
                <View>
                    <TextComponent text={item.song} size={10} styles={{ marginLeft: 10 }} font={fontFamilys.bold} />
                    <TextComponent text={item.artist} size={10} styles={{ marginLeft: 10 }} />
                </View>
            </RowComponent>
            <ArrowSquareDown size="24" color={colors.violet} />
        </RowComponent>
    </View>
);

const ChartsComponent = (props: Props) => {
    const { title, dataCharts } = props;
    return (
        <View>
            <RowComponent>
                <TextComponent text={title ? title : 'Charts'} size={16} font={fontFamilys.bold} />
                <MusicPlaylist size="24" color={colors.violet} />
            </RowComponent>
            <SpaceComponent height={16} />
            <SectionComponent>
                <FlatList
                    data={dataCharts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </SectionComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        backgroundColor: colors.card,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
});

export default ChartsComponent;
