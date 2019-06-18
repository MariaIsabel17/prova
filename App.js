import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import capa from './276305-thewallpaper.jpg';
import axios from 'axios';

export default class App extends Component {
  state = {
    personagens: []
  }

  async componentDidMount() {
    const response = await axios.get('https://api.got.show/api/show/characters');

    this.setState({
      personagens: response.data
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.capa}>
          <Image style={styles.capaImage} source={capa} />
        </View>
        <FlatList
          style={styles.flatList}
          data={this.state.personagens}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.body}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={({uri: item.image})} alt={item.image} />
              </View>
              <View style={styles.texto}>
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.house}> {item.house} </Text>
              </View>
            </View>
          )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList:{
    marginTop:150
  },
  texto:{
    width:"50%",
    height:200,
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    
  },
  imageContainer:{
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  capa: {
    width: "100%",
    height: 150,
    position: "absolute",
    top: 0
  },
  body:{
    marginTop:10,
    width:"100%",
    height:"auto",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#002",
    
  },
  capaImage: {
    width: "100%",
    height: 150
  },
  personagem: {
    width: "100%",
    height: 200
  },
  nome: {
    fontSize:21,
    color: "white"
  },
  house: {
    color: "white",
    fontSize:15
  },
  image:{
   width: 200,
   height:200,
   resizeMode:"contain",
   alignSelf:"stretch"

  }
});
