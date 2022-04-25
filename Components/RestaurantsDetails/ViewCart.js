import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, clearCart } from '../../features/cart/cartSlice';
import OrderItems from './OrderItems';

import { collection, addDoc, FieldValue, Timestamp } from "firebase/firestore";
import { db } from '../../firebase';

import LottieView from 'lottie-react-native';

export default function ViewCart({ navigation }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const total = cartItems.items.map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, cur) => prev + cur, 0);
    const finalTotal = "$" + total.toFixed(2);

    //SENDING DATA TO FIREBASE
    const addOrdertoFirebase = () => {
        setLoading(true);
        addDoc(collection(db, "orders"), {
            items: cartItems.items,
            restaurantName: cartItems.restaurantName,
            totalAmount: finalTotal,
            createdAt: Timestamp.now(),
        }).then(() => {

            setTimeout(() => {
                setLoading(false);

                navigation.navigate("OrderCompleted");
            }, 2500);
        });
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "relative",
        },

        modelCheckOutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            marginTop: 30,
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
        },

        subTotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },

        subTotalText: {
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 20,
            paddingHorizontal: 16,
            marginBottom: 10,
        }
    })

    const checkOutModalcontent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modelCheckOutContainer}>
                        <Text style={styles.restaurantName}>{cartItems.restaurantName}</Text>
                        <View style={{
                            paddingBottom: 60,
                        }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <OrderItems item={cartItems.items} />
                                <View style={styles.subTotalContainer}>
                                    <Text style={styles.subTotalText}>
                                        SubTotal
                                    </Text>
                                    <Text style={styles.subTotalText}>{finalTotal}</Text>
                                </View>
                                <View style={{
                                    marginTop: 20,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            addOrdertoFirebase();
                                            setModalVisible(false);
                                        }}
                                        activeOpacity={0.8}
                                        style={{
                                            marginTop: 20,
                                            backgroundColor: "black",
                                            alignItems: "center",
                                            padding: 15,
                                            borderRadius: 30,
                                            width: 250,

                                        }}>
                                        <Text style={{
                                            color: "white",
                                            fontSize: 20,
                                            position: "relative",
                                        }}>Check-Out</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>

            </>
        )

    }
    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)
                }>
                {checkOutModalcontent()}
            </Modal>
            {total ? (
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 25,
                    zIndex: 999,
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.8} style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            flexDirection: "row",
                            justifyContent: "center",
                            padding: 15,
                            borderRadius: 30,
                            width: 250,
                            position: "relative",
                        }}><View style={{ flexDirection: "row" }}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 20,
                                    position: "relative",

                                }}>View Cart:</Text>
                                <Text style={{
                                    color: "white",
                                    fontSize: 20,
                                    marginLeft: 10,
                                    justifyContent: "flex-end",
                                }}>{finalTotal}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : <></>
            }
            {loading ? (<View style={{
                backgroundColor: "black",
                position: "absolute",
                opacity: 0.6,
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                zIndex: 999,
            }}>
                <LottieView
                    style={{
                        height: 200,
                    }}
                    source={require("../../assets/animations/scanner.json")}
                    autoPlay
                    speed={3} />
            </View>) : (<></>)}
        </>
    )
}