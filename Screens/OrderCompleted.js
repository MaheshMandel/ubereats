import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import { selectCartItems, clearCart } from '../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux'

import LottieView from 'lottie-react-native';
import MenuItems from '../Components/RestaurantsDetails/MenuItems';



export default function OrderCompleted() {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const tempCartItems = cartItems;

    const total = cartItems.items.map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, cur) => prev + cur, 0);
    const finalTotal = "$" + total.toFixed(2);

  


    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            flex: 1,
        }}>
            <View style={{
                margin: 15,
                alignItems: "center",
                height: "100%",
                marginTop: 30,
            }}>
                <LottieView
                    style={{
                        height: 100,
                        alignSelf: "center",
                        marginBottom: 30,
                    }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}>Your order at {tempCartItems.restaurantName} has been place for {finalTotal}</Text>
                <ScrollView style={{
                    marginBottom: 40,
                }} showsVerticalScrollIndicator={false}>
                    <MenuItems foods={tempCartItems.items} hidecheckbox={true} />

                    <LottieView
                        style={{
                            height: 200,
                            alignSelf: "center",
                        }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}