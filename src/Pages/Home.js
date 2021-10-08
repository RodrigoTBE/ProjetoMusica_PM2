import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/FundoHome.png')}
        style={estilo.fundoimg}
        resizeMode="contain">
        <Text style={estilo.titulo}>App de Música</Text>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundoimg: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#00FA9A',
    paddingBottom:400,
    fontWeight: 'bold',
  },
});
