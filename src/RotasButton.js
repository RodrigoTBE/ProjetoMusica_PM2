import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlineBarros from './artistas/AlineBarros';
import CelineDion from './artistas/CelineDion';
import Kemuel from './artistas/Kemuel';
import MariahCarey from './artistas/MariahCarey';
import MichaelJackson from './artistas/MichaelJackson';
import Artista from './Pages/Artista';
const Stack = createStackNavigator();

export default function RotasButton() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Artista" component={Artista} options={{headerShown:false}}/>
      <Stack.Screen name="AlineBarros" component={AlineBarros} options={{title:"Aline Barros"}}/>
      <Stack.Screen name="CelineDion" component={CelineDion} options={{title:"Celine Dion"}}/>
      <Stack.Screen name="Kemuel" component={Kemuel} options={{title:"Coral Kemuel"}}/>
      <Stack.Screen name="MariahCarey" component={MariahCarey} options={{title:"Mariah Carey"}}/>
      <Stack.Screen name="MichaelJackson" component={MichaelJackson} options={{title:"Michael Jackson"}}/>
    </Stack.Navigator>
  );
}
