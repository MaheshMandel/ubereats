import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import HeaderTabs from '../Components/Home/HeaderTabs'
import SearchBar from '../Components/Home/SearchBar'
import Categories from '../Components/Home/Categories'
import RestaurantItems, { localRestaurants } from '../Components/Home/RestaurantItems'
import BottomTabs from '../Components/Home/BottomTabs'

import { Divider } from "react-native-elements";


const yelpApiKey = "cUYL1st8uedo_DcVmmgPSbo_aHYtyWQZ0zC17J5MI8kt1TMsz6IKJgCE1SZU1z7r99Ab5vLJtmo3SSR0kd3WNd6po4-Xn9ntv19EdJkoW_P9Y40S8D7Gn8cqz81aYnYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("hollywood");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurants = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(response => response.json())
            .then(responseJson => setRestaurantData(responseJson.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    useEffect(() => {
        getRestaurants()
    }, [city, activeTab]);



    return (
        <SafeAreaView style={{
            backgroundColor: "#eee",
            flex: 1,
            paddingTop: 27,
            
        }}>
            <View style={{
                backgroundColor: "white",
                padding: 15,
            }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}