import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CurrentWeather = props => {

    let checkHour = () => {
        let date = new Date();
        let currHour = date.getHours();
        return currHour;
    }

    let getName = x => {
        let condName;
        if (checkHour() < 6 || checkHour() > 20) {
            condName = "night " + x
        } else {
            condName = "day " + x
        }
        return condName;
    }



    let nameForSwitch = getName(props.curCon);

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

    const setColor = x => {
        let color;
        if (checkHour() < 6 || checkHour() > 20) {
            color = "white"
        } else if (x === "rain") {
            color = "white"
        } else {
            color = "black"
        }
        return color;
    }


    let textColor = setColor(props.curCon)

    return (
        <View style={styles.CurrentWeather}>

            <ImageBackground source={getImage(nameForSwitch)} style={styles.condBackground}>
                <View style={styles.conditionSection}>

                    <View style={styles.currentLocationText}>
                        <Text style={[styles.textStyleImage1, { color: textColor }]}>{props.locationName}</Text>
                        <Text style={[styles.textStyleImage, { color: textColor }]}> {props.locationData}</Text>
                    </View>
                    <View style={styles.conditionText}>
                        <Text style={[styles.textStyleImage1, { color: textColor }]}>{props.conditions}</Text>
                    </View>

                </View>
                <View style={styles.currentData}>
                    <View style={styles.weatherData}>
                        <Text style={[styles.textStyle1, { color: textColor }]}>Temperature:</Text>
                        <Text style={[styles.textStyle2, { color: textColor }]}>{props.temperature}C</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <Text style={[styles.textStyle1, { color: textColor }]}>Feels like:</Text>
                        <Text style={[styles.textStyle2, { color: textColor }]}>{props.feelsLike}C</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <Text style={[styles.textStyle1, { color: textColor }]}>Rainfall:</Text>
                        <Text style={[styles.textStyle2, { color: textColor }]}>{props.rainFall}</Text>
                    </View >
                    <View style={styles.weatherData}>
                        <Text style={[styles.textStyle1, { color: textColor }]}>Wind:</Text>
                        <Text style={[styles.textStyle2, { color: textColor }]}>{props.wind}</Text>
                    </View>
                    <View style={styles.weatherData1}>
                        <Text style={[styles.textStyle1, { color: textColor }]}>Wind description:</Text>
                        <Text style={{ color: textColor }}>{props.windData}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>



    );


}

const styles = StyleSheet.create({
    CurrentWeather: {
        position: "relative",
        overflow: "hidden",
        height: "70%",
        minHeight: "70%",
        backgroundColor: "#95a5a6",
        marginTop: "5%",
        marginBottom: "5%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    conditionSection: {
        flexDirection: "column",
        height: "40%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "space-between"

    },
    condBackground: {
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    currentData: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 15
    },
    textStyle1: {
        justifyContent: "flex-start",
        fontFamily: "Roboto",
        fontSize: 15
    },
    textStyle2: {
        alignSelf: "flex-end",
        fontFamily: "Roboto",
        fontSize: 15
    },
    textStyleImage1: {
        fontSize: 20
    },
    conditionText: {
        marginTop: 50,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10
    },
    currentLocationText: {
        margin: 10
    },
    weatherData: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default CurrentWeather;