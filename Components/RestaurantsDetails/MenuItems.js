import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, addItem, removeItem } from '../../features/cart/cartSlice';


export default function MenuItems({ restaurantName, foods, hidecheckbox, marginLeft }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const foodInCart = (food) => Boolean(cartItems.items.find(item => item.title === food.title))
    const cart = true;
    let bottom = false;;

    return (
        <View>
            {cart && <View>
                {foods.map((food, index) => (
                    <View key={index}>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            margin: 20,
                        }}>
                            {hidecheckbox ? <></> : (
                                <BouncyCheckbox
                                    iconStyle={{
                                        bordercolor: "lightgray",
                                    }}
                                    fillColor="green"
                                    onPress={(isChecked) => {
                                        if (isChecked) {
                                            dispatch(addItem({ items: { ...food, isChecked }, restaurantName: restaurantName }))
                                            bottom = true;
                                        }
                                        else {
                                            dispatch(removeItem({ items: { ...food, isChecked }, restaurantName: restaurantName }))
                                        }
                                    }}
                                    isChecked={foodInCart(food)}
                                />
                            )}
                            <FoodInfo title={food.title} description={food.description} price={food.price} />
                            <FoodImage image={food.image} marginLeft={marginLeft ? marginLeft : 0} />
                        </View>
                        <Divider width={3} orientation="vertical" style={{
                            marginHorizontal: 30,
                        }} />
                    </View>
                ))}
            </View>}

            {hidecheckbox ? <></> : (
                <View style={{
                    height: 100,
                }}>
                </View>
            )}

        </View>
    )
}

const FoodInfo = ({ title, description, price }) => (
    <View style={{
        width: "62%",
        justifyContent: "space-evenly",
        marginRight: 10,
    }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
        }}>{title}</Text>
        <Text>{description}</Text>
        <Text style={{
            fontWeight: "bold",
        }}>{price}</Text>
    </View>
)

const FoodImage = ({ image, marginLeft }) => (
    <View>
        <Image
            source={{ uri: image }}
            style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
)