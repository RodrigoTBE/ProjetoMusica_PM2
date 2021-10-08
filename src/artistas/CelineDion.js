import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function CelineDion() {
  return (
    <View style={estilo.container}>
      <ScrollView vertical={true}>
        <Text style={estilo.titulo}>Céline Dion</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/CelineDion1.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/CelineDion2.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/CelineDion3.png')}
                style={estilo.img}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={estilo.paragrafo}>
          Céline Marie Claudette Dion (Charlemagne, 30 de março de 1968) é uma
          cantora canadense. Dion surgiu como uma estrela adolescente no mundo
          francófono na década de 1980, depois que seu empresário e futuro
          marido, René Angélil, hipotecou sua casa para financiar o seu primeiro
          disco. Em 1990, ela lançou seu primeiro álbum em inglês, Unison, que a
          estabeleceu como uma artista comercialmente viável na América do Norte
          e outras áreas do mundo que tem o inglês como idioma principal.
        </Text>
      </ScrollView>
    </View>
  );
}

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
  img: {
    width: 315,
    height: 330,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  paragrafo: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#00FA9A',
    margin: 12,
    borderRadius: 10,
  },
});
