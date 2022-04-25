import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between",
        }}>
            <Icon icon="home" text="home" />
            <Icon icon="search" text="Search" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}

const Icon = ({ icon, text }) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={icon} size={20}
                color="black"
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }} />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)