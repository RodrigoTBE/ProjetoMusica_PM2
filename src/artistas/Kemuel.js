import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function Kemuel() {
  return (
    <View style={estilo.container}>
      <ScrollView vertical={true}>
        <Text style={estilo.titulo}>Coral Kemuel</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/kemuel1.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/kemuel2.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/kemuel3.jpg')}
                style={estilo.img}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={estilo.paragrafo}>
          Kemuel é um grupo cristão, com influências do gospel norte americano e
          da música cristã contemporânea como Hilsong United e Kirk Franklin.
          Sob a liderança do pastor David Marx, tem se destacado no meio gospel,
          sendo considerado um dos mais relevantes grupos vocais do cenário
          cristão tanto nacionalmente quanto internacionalmente. O grupo já
          passou por várias formações e atualmente conta com cinco cantores. O
          grupo já lançou 4 CDs. Em 2017 assinou contrato com a Sony Music e
          hoje também conta com AmpliudeA.
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
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#00FA9A',
    margin: 12,
    borderRadius: 10,
  },
});
