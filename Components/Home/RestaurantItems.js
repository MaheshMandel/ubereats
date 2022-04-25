import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Farmhouse Kitchen Thai Cuisin",
        rating: "4.5",
        time: "35-50",
        price: "$$$",
    },
    {
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Cafe La Familia",
        rating: "4.6",
        time: "30-40",
        price: "$$$",
    },
    {
        image: "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Garden Fresh Palo Alto",
        rating: "4.6",
        time: "15-30",
        price: "$$$",
    },
    {
        image: "https://images.unsplash.com/photo-1487004121828-9fa15a215a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Alice's Restaurant",
        rating: "4.8",
        time: "30-40",
        price: "$$$",
    },
    {
        image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "The Kitchen",
        rating: "4.5",
        time: "30-50",
        price: "$$$",
    },
]

export default function RestaurantItems({ navigation, restaurantData }) {
    return (
        <View>
            {restaurantData.map((restaurant, index) => (
                <View key={index} style={{
                    marginTop: 10,
                    padding: 15,
                    backgroundColor: "white",
                    borderRadius: 10,
                }}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        rating: restaurant.rating,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        categories: restaurant.categories,
                    })}>
                        <RestaurantImages
                            image={restaurant.image_url}
                        />
                    </TouchableOpacity>
                    <RestaurantText
                        name={restaurant.name}
                        rating={restaurant.rating}
                        time={restaurant.time}
                    />
                </View>
            ))}
        </View>
    )
}

const RestaurantImages = ({ image }) => (
    <>
        <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 200, borderRadius: 15, }} />
        <TouchableOpacity style={{
            position: "absolute",
            top: 20,
            right: 20,
        }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantText = ({ name, rating, time }) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }}>
        <View>
            <Text style={{
                fontSize: 17,
                fontWeight: "bold",
            }}>{name}</Text>
            <Text style={{
                fontSize: 13,
                color: "gray",
            }}>30-40 • min</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
        }}>
            <Text>{rating}</Text>
        </View>
    </View>
)        