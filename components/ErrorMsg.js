import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const ErrorMsg = props => {

    return (
        <View style={styles.ErrorMsg}>
            <ImageBackground source={require('../img/dayClear.png')} style={styles.condBackground}>
                <Text style={styles.errorText}>{props.error}</Text>
            </ImageBackground>
        </View>



    );


}

const styles = StyleSheet.create({
    ErrorMsg: {
        
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
    condBackground: {
        justifyContent:"center",
        alignItems:"center",
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
    },
    errorText:{
        textAlign:'center',
        margin:20,
        fontSize:30
    }

})

export default ErrorMsg;