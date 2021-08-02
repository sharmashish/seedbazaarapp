import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export class Splashscreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000);
    }

    render() {
        return (
            <View style={styles.backgroundColor}>

                <Image source={require('../../assets/logo2.png')} style={styles.logoStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        display: "flex",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
        resizeMode: "contain",
        width: "80%",
    },
    backgroundColor: {
        backgroundColor: "#284243",
        height: "100%",
        display: "flex",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})


export default Splashscreen