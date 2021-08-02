import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Forgetpassword(props) {
    return (
     <>
     <View style={styles.backgroundContainer}>
     <Image style={styles.logopos} source={require('../../assets/GARMENTS_WHITE.png')} />
     <View style={styles.flexcolumn}>
                    <Text style={styles.HeadingText}>Forget Password</Text>
                </View>
                <View style={styles.flexcolumn}>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>Please enter your registered email address We will send reset password link to there</Text>
                    </View>
                    <TouchableOpacity>
                        <TextInput placeholder="Password" style={styles.labelPassword}></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.butt}>
                        <Text style={styles.btn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow, { justifyContent: "center", }]}>
                <Text style={{color:"#fff"}}>Already have an account?</Text>
                <TouchableOpacity style={{ marginHorizontal: wp(2), padding: 0, }}>
                <Text style={{ color: "#11bfae", fontWeight: "bold", }} onPress={() => props.navigation.navigate("Login")}>Sign in</Text>

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

        infoView:{
            width:"90%",
            justifyContent:"center",
            marginBottom:10,
        },

        infoText:{
            color:"#fff",
            justifyContent:"center",
            textAlign:"center",
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

