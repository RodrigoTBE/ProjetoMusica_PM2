import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function MariahCarey() {
  return (
    <View style={estilo.container}>
      <ScrollView vertical={true}>
        <Text style={estilo.titulo}>Mariah Carey</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/mariahCarey.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/mariahCarey2.jpg')}
                style={estilo.img}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/mariahCarey3.jpg')}
                style={estilo.img}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={estilo.paragrafo}>
          Mariah Carey (Huntington, 27 de março de 1970) é uma cantora,
          compositora, produtora musical e atriz americana. Reconhecida por seu
          alcance vocal de cinco oitavas, estilo de canto melismático e uso do
          registro de apito. Carey alcançou a fama no início dos anos 90, depois
          de assinar com a Columbia Records e lançar seu álbum de estreia
          homônimo, que liderou a parada americana de álbuns por onze semanas
          consecutivas. Logo depois, Carey se tornou o único artista a ter seus
          cinco primeiros singles a alcançar o número 01 na parada Hot 100 da
          Billboard, de "Vision of Love" até "Emotions".
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
    marginVertical: 10,
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
