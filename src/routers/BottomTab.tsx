import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../homes/HomeScreen';
import SearchScreen from '../homes/SearchScreen';
import { Home, SearchNormal } from 'iconsax-react-native'; // Đảm bảo rằng các biểu tượng được import đúng cách
import { colors } from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let IconComponent;

                    if (route.name === 'HomeScreen') {
                        IconComponent = focused ? <Home color={colors.violet} size={size} variant="Bold" /> : <Home color={color} size={size} />;
                    } else if (route.name === 'SearchScreen') {
                        IconComponent = focused ? <SearchNormal color={colors.violet} size={size} variant="Bold" /> : <SearchNormal color={color} size={size} />;
                    }


                    return IconComponent;
                },
                tabBarActiveTintColor: colors.violet,
                tabBarInactiveTintColor: colors.gray,
                tabBarStyle: {
                    backgroundColor: colors.taskBar,
                    borderTopWidth:0.1,
                    shadowColor:colors.blue,
                    shadowColor: 'transparent', 
                }

            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ tabBarLabel: 'Search' }} />
        </Tab.Navigator>
    );
};

export default BottomTab;
