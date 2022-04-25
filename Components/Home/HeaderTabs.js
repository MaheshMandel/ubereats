import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs({activeTab, setActiveTab}) {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                btncolor="black"
                textcolor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <HeaderButton
                text="PickUp"
                btncolor="white"
                textcolor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = ({ text, btncolor, textcolor, activeTab, setActiveTab }) => (
    <TouchableOpacity style={{
        backgroundColor: activeTab === text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 50,
    }}
        onPress={() => setActiveTab(text)} >
        <Text style={{
            color: activeTab === text ? "white" : "black",
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 1.2,
        }}>{text}</Text>
    </TouchableOpacity>
);