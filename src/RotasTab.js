import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Pages/Home';
import Artista from './RotasButton';
import Musica from './Pages/Musica';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Artista"
        component={Artista}
        options={{
          tabBarLabel: 'Artista',
          headerShown:false,
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown:true,
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Musica"
        component={Musica}
        options={{
          tabBarLabel: 'Musica',
          headerShown:false,
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="music-note" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
