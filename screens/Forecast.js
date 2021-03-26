import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
import ForecastItem from '../components/ForecastItem';
import { LinearGradient } from 'expo-linear-gradient';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: this.props.route.params,
            curCon: this.props.route.curCon

        };
    }
     
  render() {
      console.log(this.state.forecast.curCon)
    return (
        <View style={styles.container}>
          <LinearGradient
                    style={styles.background}
                    colors={['#a2b6df','#6b8cce','#a2b6df','#0c3483']}
                />
          <View style={styles.scrollBox}>
            <FlatList
              keyExtractor={(item,index) => item.date}
              data={this.state.forecast.params}
              renderItem={itemData => <ForecastItem id={itemData.item.date} date={itemData.item.date} temperature={itemData.item.temperature} wind={itemData.item.wind} curCon={this.state.forecast.curCon} conditions={itemData.item.conditions}/>}
            />
          </View>
        </View>
      );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      minHeight:"100%"
    },
    background: {
        
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
  },
    scrollBox:{
      marginBottom:50
    }
  });

export default Forecast;