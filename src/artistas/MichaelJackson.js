import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function MichaelJackson() {
  return (
    <View style={estilo.container}>
      <ScrollView vertical={true}>
        <Text style={estilo.titulo}>Michael Jackson</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/michaelJackson.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/michaelJackson2.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/michaelJackson3.jpg')}
                style={estilo.img}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={estilo.paragrafo}>
          Michael Joseph Jackson (Gary, 29 de agosto de 1958 — Los Angeles, 25
          de junho de 2009) foi um cantor, compositor e dançarino estadunidense.
          Apelidado de "Rei do Pop", foi um dos ícones culturais mais
          importantes e influentes de todos os tempos e um dos maiores artistas
          da história da música. Suas contribuições para a música, a dança e a
          moda por mais de quatro décadas, juntamente com a divulgação de sua
          vida pessoal, fizeram dele uma figura global na cultura popular.
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
