import { View, Text, TouchableOpacity, Input } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper';

const placeOne = {
    description: 'San Francisco',
};
const placeTwo = {
    description: 'New York',
};
const placeThree = {
    description: 'Chicago',
};
const placeFour = {
    description: 'Los Angeles',
};

export default function SearchBar({ setCity }) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{
            marginTop: 20,
        }}>
            <Searchbar
                style={{
                    color: '#fff',
                    borderRadius: 50,
                }}
                inputStyle={{
                    color: "#111111",

                }}
                placeholder="Search..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={() => setCity(searchQuery)}
                icon={() => <Icon name="location" size={24} color="#111111" />}
            />
        </View>
    )
}    