import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';

export default function Loading({ navigation }) {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
        navigation.navigate("Home");
    }, 3500);


    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
        }}>
            {loading ? (<View style={{
                backgroundColor: "white",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}>
                <Image source={require("../assets/icon.png")}
                    style={{
                        width: 150,
                        height: 150,
                    }} />
                <LottieView
                    style={{
                        height: 300,
                    }}
                    source={require("../assets/animations/cooking.json")}
                    autoPlay
                    loop={true}
                    speed={0.5} />
            </View>) : (<></>)}
        </View>
    )
}