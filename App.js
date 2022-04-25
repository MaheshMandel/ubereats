import React from 'react'
import RootNavigation from './Navigation';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {
    return <RootNavigation />
}