import { View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { colors } from '../constants/colors';
import SpaceComponent from './SpaceComponent';

interface Props {
  duration?: number;
  currentTime?: number;
  onSeek?: (value: number) => void;
}

const SeekBarComponent: React.FC<Props> = ({ duration = 0, currentTime = 0, onSeek }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Slider
        style={{ width: '100%', height: 3 , backgroundColor:colors.decs}}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        onValueChange={onSeek} // Gọi hàm khi người dùng kéo thanh
        minimumTrackTintColor={colors.green}
        maximumTrackTintColor="#000"
      />
      <SpaceComponent height={20}/>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Text style={{ color:colors.decs }}>
          {formatTime(currentTime)}  {/* Hiển thị thời gian hiện tại */}
        </Text>
        <Text style={{ color:colors.decs}}>
          {formatTime(duration)}  {/* Hiển thị tổng thời gian */}
        </Text>
      </View>
    </View>
  );
};

// Hàm để định dạng thời gian từ giây thành phút:giây
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
};

export default SeekBarComponent;
