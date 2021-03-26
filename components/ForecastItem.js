import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ForecastItem = props => {

  let checkHour = () => {
    let date = new Date();
    let currHour = date.getHours();
    return currHour;
  }


  let imageName = (x) => {
    let condName;
    if (x.length < 4) {
      if (checkHour() < 6 || checkHour() > 20) {
        condName = "night " + props.curCon;
      } else {
        condName = "day " + props.curCon;
      }
    } else {
      let muutuja = x[2].split(": ");
      condName = "day " + muutuja[1];
    }
    return condName;
  }

  let getCondition = (x) => {
    let condName;
    if (x.length < 4) {
      condName = props.curCon;
    } else {
      let muutuja = x[2].split(": ");
      condName = muutuja[1];
    }
    return condName;
  }

  let imageRequire = imageName(props.conditions);

  const getImage = name => {
    switch (name) {
      case "day clear sky":
        return require('../img/dayClear.png')
      case "day partly cloudy":
        return require('../img/dayPartlyCloudy.png')
      case "day cloudy":
        return require('../img/dayCloudy.png')
      case "day fair":
        return require('../img/dayFair.png')
      case "day rain":
        return require('../img/rain.png')
      case "day rain showers":
        return require('../img/rain.png')
      case "day light rain showers":
        return require('../img/lightRain.png')
      case "day light rain":
        return require('../img/lightRain.png')
      case "day sleet":
        return require('../img/sleet.png')
      case "day sleet showers":
        return require('../img/sleet.png')
      case "day snow":
        return require('../img/daySnow.png')
      case "day light snow":
        return require('../img/daySnow.png')
      case "night clear sky":
        return require('../img/nightClear.png')
      case "night partly cloudy":
        return require('../img/nightPartlyCloudy.png')
      case "night fair":
        return require('../img/nightPartlyCloudy.png')
      case "night cloudy":
        return require('../img/nightCloudy.png')
      case "night rain":
        return require('../img/rain.png')
      case "night rain showers":
        return require('../img/rain.png')
      case "night light rain showers":
        return require('../img/lightRain.png')
      case "night sleet":
        return require('../img/sleet.png')
      case "night sleet showers":
        return require('../img/sleet.png')
      case "night snow":
        return require('../img/nightSnow.png')
      case "night light snow":
        return require('../img/nightSnow.png')

    }
  }

  const getColor = name => {
    let regex1 = /day rain/;
    if (name.match(regex1)) {
      return "white"
    } else {
      return "black"
    }

  }

  let textColor = getColor(imageRequire);


  return (

    <View style={styles.forecastCard}>
      <ImageBackground source={getImage(imageRequire)} style={styles.forecastBackground}>
        <Text style={[styles.textStyle, { color: textColor }]}>{props.date}</Text>
        <Text style={[styles.textStyle, { color: textColor, alignSelf: 'center' }]}>{getCondition(props.conditions)}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.textStyle, { color: textColor, alignSelf: "flex-start" }]}>Temperature:</Text>
          <Text style={[styles.textStyle, { color: textColor, alignSelf: "flex-end" }]}>{props.temperature} C</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.textStyle, { color: textColor }]}>Wind:</Text>
          <Text style={[styles.textStyle, { color: textColor, alignSelf: "flex-end" }]}>{props.wind}</Text>
        </View>



      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastCard: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: 175,
    backgroundColor: "#2980b9",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  forecastBackground: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  textStyle: {
    fontFamily: "Roboto",
    fontSize: 15,
    margin: 10
  }
})

export default ForecastItem;

