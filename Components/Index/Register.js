import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Register(props) {
    return (
        <>
        <View style={styles.backgroundContainer}>
        <ScrollView style={{ marginVertical: hp(5) }}>
        <Image style={styles.logopos} source={require('../../assets/GARMENTS_WHITE.png')} />
        <View style={styles.flexcolumn}>
                        <Text style={styles.HeadingText}>Register with us</Text>
                    </View>
                    <View style={styles.flexcolumn}>
                    <TouchableOpacity>
                        <TextInput placeholder="Enter Your Full Name" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Business Name" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Email" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Phone Number" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Password" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Confirm Password" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butt} onPress={() => props.navigation.navigate("Login")}>
                        <Text style={styles.btn}>Sign In</Text>
                    </TouchableOpacity>
                    </View>
        </ScrollView>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
    logopos: {
        display: "flex",
        alignSelf: "center",
        marginTop: hp("8"),
    },
    flexcolumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    HeadingText: {
        fontSize: 22,
        marginVertical: hp(4),
        textAlign: "center",
        fontWeight: "bold",
        color:"#fff"
    },
    labelMail:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: wp("80"),
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#fff",
        color: "#808080",
        borderRadius: 10,
        marginVertical: hp(2),
        paddingRight: wp(1.5)
    },
    butt:{
        backgroundColor:"#11bfae",
        color: "white",
        borderRadius: 10,
        width: wp("80"),
        marginVertical: hp(2.8),
    },
    btn:{
        paddingVertical: hp(1.5),
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    }
})

