import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function AlineBarros() {
  return (
    <View style={estilo.container}>
      <ScrollView vertical={true}>
        <Text style={estilo.titulo}>Aline Barros</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/alineBarros1.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/alineBarros2.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/alineBarros3.jpg')}
                style={estilo.img}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={estilo.paragrafo}>
          Aline Barros, (Rio de Janeiro, 7 de outubro de 1976), cujo nome de
          batismo é Aline Kistenmacker Barros, é uma cantora, compositora,
          multi-instrumentista, escritora, empresária, bióloga, pastora
          brasileira e apresentadora. Considerada uma das maiores cantoras de
          música cristã do Brasil, Aline já vendeu mais de 7 milhões de discos
          pelo mundo, sendo certificada pela ABPD com vários discos de ouro e
          platina.
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
    marginVertical: 20,
  },
  img: {
    width: 315,
    height: 330,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  paragrafo: {
    textAlign: 'justify',
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#00FA9A',
    margin: 12,
    borderRadius: 10,
  },
});
