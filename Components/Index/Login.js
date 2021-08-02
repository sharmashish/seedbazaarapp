import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Login(props) {
    return (
     <>
     <View style={styles.backgroundContainer}>
     <Image style={styles.logopos} source={require('../../assets/GARMENTS_WHITE.png')} />
     <View style={styles.flexcolumn}>
                    <Text style={styles.HeadingText}>Sign In</Text>
                </View>
                <View style={styles.flexcolumn}>
                    <TouchableOpacity>
                        <TextInput placeholder="Email" style={styles.labelMail}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="Password" style={styles.labelPassword}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Forgetpassword")}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butt} onPress={() => props.navigation.navigate("Home")}>
                        <Text style={styles.btn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow, { justifyContent: "center", }]}>
                <Text style={{color:"#fff"}}>Don't have an Account ?</Text>
                <TouchableOpacity style={{ marginHorizontal: wp(2), padding: 0, }}  onPress={() => props.navigation.navigate("Register")}>
                <Text style={{ color: "#11bfae", fontWeight: "bold", }}>Sign up</Text>

                </TouchableOpacity>
                </View>

     </View>
     </>
    )
}
const styles=StyleSheet.create({
    backgroundContainer:{
        backgroundColor:"#1b3c59",
    },
        logopos: {
            display: "flex",
            alignSelf: "center",
            marginTop: hp("8"),
            resizeMode :"contain",
            width: "80%",
            height:"20%",
        },
        flexcolumn: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        flexRow: {
            display: "flex",
            flexDirection: "row",
        },
        HeadingText: {
            fontSize: 22,
            marginVertical: hp(4),
            textAlign: "center",
            fontWeight: "bold",
            color:"#fff",
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
        labelPassword:{
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
        forgot:{
            fontWeight: "bold",
            alignSelf: "center", 
            width: wp("80"), 
            textAlign: "right",
            color:"#fff",
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

