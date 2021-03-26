import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import CurrentWeather from '../components/CurrenWeather';
import ErrorMsg from '../components/ErrorMsg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enteredText: '',
            errorMsg: 'Click location icon or search location for weather forecast!',
            currentWeather: {},
            forecastWeather: [],
            geoLocation: {},
            curCon: 'clear'
        };
    }



    locationInputHandler = (inputText) => {
        this.setState({ enteredText: inputText })
    }

    searchLocation = async (enteredLocation) => {
        this.setState({ currentWeather: {} });
        this.setState({ forecastWeather: [] });
        this.setState({ errorMsg: '' })
        let body = { "location": enteredLocation }
        let dataFromApi = await this.getWeatherData(body);
        if (dataFromApi.error) {
            this.setState({ errorMsg: dataFromApi.error })
            this.textInput.clear()
        } else {
            let current = dataFromApi.current;
            let forecast = dataFromApi.forecast;
            this.setState({ currentWeather: current });
            this.setState({ forecastWeather: forecast });
            this.setState({ curCon: current.conditions });
            console.log(this.state.currentWeather)
            this.textInput.clear()
        }

    }

    getGeoLocation = async () => {
        this.setState({ currentWeather: {} });
        this.setState({ forecastWeather: [] });
        this.setState({ errorMsg: '' });
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            this.setState({ errorMsg: 'Permission to access location was denied' });
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        let coordinates = {
            "latitude": location.coords.latitude,
            "longitude": location.coords.longitude
        };
        let dataFromApi = await this.getWeatherData(coordinates);
        let current = dataFromApi.current;
        let forecast = dataFromApi.forecast;
        this.setState({ currentWeather: current });
        this.setState({ forecastWeather: forecast });
        this.setState({ curCon: current.conditions });
        this.textInput.clear()
    }

    getWeatherData = async (body) => {
        try {
            let response = await fetch(
                'https://motsar-weather-api.herokuapp.com/conditions', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify(body)
            }
            );
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <View style={styles.container} >
                <LinearGradient
                    style={styles.background}
                    colors={['#a2b6df', '#6b8cce', '#a2b6df', '#0c3483']}
                />

                <View style={styles.weatherSearch}>
                    <TextInput style={styles.searchField} underlineColorAndroid="transparent" ref={input => { this.textInput = input }} onChangeText={this.locationInputHandler} placeholder="Enter location ..." />
                    <TouchableOpacity onPress={() => this.searchLocation(this.state.enteredText)} >
                        <Image source={require('../img/search.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getGeoLocation}>
                        <Image source={require('../img/geolocation.png')} />
                    </TouchableOpacity>
                </View>
                {this.state.errorMsg.length > 0 ? <ErrorMsg error={this.state.errorMsg} /> : <CurrentWeather locationName={this.state.currentWeather.locationName} curCon={this.state.curCon} locationData={this.state.currentWeather.locationData} conditions={this.state.currentWeather.conditions} temperature={this.state.currentWeather.temperature} feelsLike={this.state.currentWeather.feelsLike} rainFall={this.state.currentWeather.precipitation} wind={this.state.currentWeather.wind} windData={this.state.currentWeather.windDescription} />}

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button title="Forecast" style={{ color: "black" }} onPress={() => this.props.navigation.navigate('Forecast', { params: this.state.forecastWeather, curCon: this.state.curCon })} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        flex: 1,
        padding: 20,
        paddingBottom: 50

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    weatherSearch: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    searchField: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "65%",
        fontSize: 20,
        textDecorationLine: 'none',
        paddingBottom: 5


    },

})

export default Home;