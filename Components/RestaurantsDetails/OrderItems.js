import { View, Text } from 'react-native'
import React from 'react'

export default function OrderItems({ item }) {
    return (
        <View>
            {item.map((item, index) => (
                <View key={index} style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#999",
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "gray",

                    }}>{item.title}</Text>
                    <Text style={{
                        opacity: 0.7,
                        fontSize: 16,
                        color: "gray",
                    }}>{item.price}</Text>
                </View>
            ))}
        </View>
    )
}