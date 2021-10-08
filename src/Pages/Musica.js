import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>As Músicas {'\n'} Mais Tocadas</Text>

      <FlatList
        data={musicas}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <View style={estilo.musica}>
            <View>
              <Text style={estilo.txtMusica}>{item.nome} </Text>
            </View>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                {' '}
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'red'}
                />{' '}
                {item.like} Curtidas
              </Text>
              <Text style={estilo.reproducoes}>
                <MaterialCommunityIcons
                  name="headphones"
                  size={25}
                  color={'red'}
                />{' '}
                {item.reproducoes} Reproduções
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Algo Novo',
    like: 1915,
    reproducoes: 2099,
  },
  {
    uid: 2,
    nome: 'Hero',
    like: 6815,
    reproducoes: 10680,
  },
  {
    uid: 3,
    nome: 'My Heart Will Go On',
    like: 7833,
    reproducoes: 12270,
  },
  {
    uid: 4,
    nome: 'Ressucita-me',
    like: 5545,
    reproducoes: 8015,
  },
  {
    uid: 5,
    nome: 'Billie Jean',
    like: 9090,
    reproducoes: 11254,
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DEB3',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#00FA9A',
    fontWeight: 'bold',
    marginVertical: 30,
  },
  musica: {
    backgroundColor: '#00FA9A',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtMusica: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical:10,
    textAlign:'center',
  },
});
