import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export class Home extends Component {
    render() {
        return (
            <WebView source={{ uri: 'http://192.168.0.105:4200' }} />
        )
    }
}

export default Home
