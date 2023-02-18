/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    //USERLOGINAUTH

const userSignUp = async () => {
    const result = await auth().createUserWithEmailAndPassword(email,password)
    console.log(result)
  }
    return (
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.box1}>
                <Image style={{ width: 300, height: 300 }} source={require("../assets/logo.png")} />
                <Text style={styles.text}>please SignUp to continue!</Text>
            </View>
            <View style={styles.box2}>

                <TextInput
                    label="Email"
                    value={email}
                    mode="outlined"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    label="password"
                    value={password}
                    mode="outlined"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />

<Button   mode="contained" onPress={() => userSignUp()}>
   Sign Up
  </Button>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text>Login</Text>
  </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    box1: {
        alignItems: "center",
    },
    box2: {
        paddingHorizontal: 40,
        height: "50%",
        justifyContent: "space-evenly",

    },
    text: {
        fontSize: 22
    },
})