import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Os Melhores Artistas</Text>

      <FlatList
        data={artistas}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
                <Text style={estilo.txtArtista}>{item.nome} </Text>
              </TouchableOpacity>
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
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={25}
                  color={'red'}
                />{' '}
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const artistas = [
  {
    uid: 1,
    nome: 'Aline Barros',
    like: 2405,
    seguidores: 3450,
    buttom: 'AlineBarros',
  },
  {
    uid: 2,
    nome: 'Michael Jackson',
    like: 7833,
    seguidores: 11922,
    buttom: 'MichaelJackson',
  },
  {
    uid: 3,
    nome: 'Mariah Carey',
    like: 7356,
    seguidores: 10550,
    buttom: 'MariahCarey',
  },
  {
    uid: 4,
    nome: 'Celine Dion',
    like: 7123,
    seguidores: 10272,
    buttom: 'CelineDion',
  },
  {
    uid: 5,
    nome: 'Kemuel',
    like: 1450,
    seguidores: 1993,
    buttom: 'Kemuel',
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
  artista: {
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
  txtArtista: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
