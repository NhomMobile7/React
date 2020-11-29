import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ListProducts')}>
                <View style={styles.view}>
                    <Text style={styles.text}>Quản Lý Sản Phẩm</Text>
                    <Image style={styles.image}
                        source={require('../assets/product.png')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListBill')}>
                <View style={styles.view}>
                    <Text style={styles.text}>Quản Lý Hóa Đơn</Text>
                    <Image style={styles.image}
                        source={require('../assets/bill.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    view: {
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius:10
    },
    image: {
        width: 64, 
        height: 64, 
        marginTop: 10, 
        marginLeft: 10, 
        resizeMode: 'cover'
    },
    text: {
        fontSize:16,
        fontWeight:'bold'
    }
});


