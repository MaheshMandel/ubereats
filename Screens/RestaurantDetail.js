import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import About from '../Components/RestaurantsDetails/About'
import MenuItems from '../Components/RestaurantsDetails/MenuItems'
import { Divider } from 'react-native-elements'
import ViewCart from '../Components/RestaurantsDetails/ViewCart'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
        title: "Key lime pie",
        description: "The pie is made of lime juice, sweetened condensed, milk and egg yolks in a pie crust.",
        price: "$19.50",
        image:
            "https://images.yen.com.gh/images/f34f490bbf7c81f2.jpg?imwidth=720",
    },
    {
        title: "Pancakes and maple syrup",
        description: "Making pancakes is a fantastic way to start the day. Maple syrup is a great addition to the meal.",
        price: "$15.50",
        image:
            "https://images.yen.com.gh/images/38701f1bdcf00611.jpg?imwidth=720",
    },
    {
        title: "Tex-Mex",
        description: "mixed beef and chicken fajita ingredients, served on a hot iron skillet",
        price: "$25.50",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flickr_elisart_324248450--Beef_and_chicken_fajitas.jpg/800px-Flickr_elisart_324248450--Beef_and_chicken_fajitas.jpg",
    },
    {
        title: "London broil",
        description: "It is a beef dish made by broiling marinated beef, then cutting it across the grain into thin strips.",
        price: "$13.50",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/London_broil.jpg/800px-London_broil.jpg",
    },
]

export default function RestaurantDetail({ route, navigation }) {
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            flex: 1,
            paddingTop: 27,
        }}>
            <View style={{ flex: 1 }}>
                <About route={route} />
                <Divider
                    width={1.8}
                    style={{
                        marginVertical: 20,
                    }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MenuItems restaurantName={route.params.name} foods={foods}/>

                </ScrollView>
                <ViewCart navigation={navigation} restaurantName={route.params.name} />
            </View>
        </SafeAreaView>
    )
}

