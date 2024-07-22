import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Sound from 'react-native-sound';
import SeekBarComponent from './SeekBarComponent';  // Điều chỉnh đường dẫn import nếu cần
import RowComponent from './RowComponen';
import { Back, Next, Pause, Play, Previous, Repeat } from 'iconsax-react-native';
import { colors } from '../constants/colors';
import SpaceComponent from './SpaceComponent';

const songList = [
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FAnNutNhoThaGiacMo.mp3?alt=media&token=4944fe1f-c969-487e-b0eb-d87101e7c417',
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FExitSign.mp3?alt=media&token=65f993a8-c0d8-4058-b019-87bfa45a30b0',
    'https://firebasestorage.googleapis.com/v0/b/mydreammusic-7f041.appspot.com/o/Music%2FDanhDoi.mp3?alt=media&token=da884fe1-2568-4382-9e3c-9769d024e048'
];

const PlayCommponent = () => {
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

    useEffect(() => {
        Sound.setCategory('Playback');
    }, []);

    useEffect(() => {
        if (sound) {
            const interval = setInterval(() => {
                sound.getCurrentTime((seconds) => {
                    setCurrentTime(seconds);
                });
            }, 1000); 

            return () => clearInterval(interval); 
        }
    }, [sound, isPlaying]);

    const loadSound = (songUrl: string) => {
        if (sound) {
            sound.stop(() => {
                sound.release();
                console.log('Sound released');
            });
        }
        const newSound = new Sound(
            songUrl,
            null,
            (error) => {
                if (error) {
                    console.log('Error loading sound');
                    Alert.alert('Error', 'Failed to load the sound');
                    return;
                }
                newSound.getDuration((duration) => setDuration(duration)); 
                console.log('Sound loaded');
                setSound(newSound);
                newSound.play((success) => {
                    if (!success) {
                        console.log('Failed to play sound');
                    } else {
                        console.log('Music is playing');
                    }
                });
                setIsPlaying(true);
            }
        );
    };

    const playSound = () => {
        if (sound) {
            if (isPlaying) {
                sound.pause();
                setIsPlaying(false);
                console.log('Music paused');
            } else {
                sound.play((success) => {
                    if (!success) {
                        console.log('Failed to play sound');
                    } else {
                        console.log('Music is playing');
                    }
                });
                setIsPlaying(true);
            }
        } else {
            loadSound(songList[currentSongIndex]);
        }
    };

    const handleSeek = (value: number) => {
        if (sound) {
            sound.setCurrentTime(value);
            setCurrentTime(value);
            if (!isPlaying) {
                setIsPlaying(true);
            }
        }
    };

    const playNextSong = () => {
        if (currentSongIndex < songList.length - 1) {
            const nextIndex = currentSongIndex + 1;
            setCurrentSongIndex(nextIndex);
            loadSound(songList[nextIndex]);
        }
    };

    const playPreviousSong = () => {
        if (currentSongIndex > 0) {
            const prevIndex = currentSongIndex - 1;
            setCurrentSongIndex(prevIndex);
            loadSound(songList[prevIndex]);
        }
    };

    return (
        <View>
            <SeekBarComponent
                duration={duration}
                currentTime={currentTime}
                onSeek={handleSeek}
            />
            <SpaceComponent height={10}/>
            <RowComponent justify='space-between' >
                <Repeat size="32" color={colors.violet} variant="Bold"/>
                <RowComponent justify='space-evenly'styles={{flex:1}}>
                    <TouchableOpacity onPress={playPreviousSong}>
                        <Previous size="32" color= {colors.violet} variant="Bold"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={playSound}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 69,
                            width: 69,
                            borderRadius: 50,
                            backgroundColor: colors.decs,
                            borderWidth:1,
                            borderColor:colors.violet
                        }}
                    >
                        {isPlaying ? <Pause size="32" color={colors.violet} /> : <Play size="32" color={colors.violet} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={playNextSong}>
                        <Next size="32" color={colors.violet} variant='Bold'/>
                    </TouchableOpacity>
                </RowComponent>
                <Back size="32" color={colors.violet} />
            </RowComponent>
        </View>
    );
};

export default PlayCommponent;
