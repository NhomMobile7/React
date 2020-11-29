import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
class Header extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, textAlign: "center", fontWeight: 'bold' }}>Quản Lý Sản Phẩm</Text>
                </View>
                <View style={styles.body}>
                    <View style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        margin: 20,
                        height: 35,
                        borderRadius: 20
                    }}>
                        <TextInput placeholder="Search..." style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            padding: 7,
                            width: 317,
                        }} />
                        <TouchableOpacity>
                            <Image style={{
                                width: 25,
                                height: 25,
                                marginTop: 2
                            }}
                                source={require('../assets/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        justifyContent: 'center',
    },
    touchable: {
        borderRadius: 20,
        width: 140,
        height: 30,
        marginLeft: 10,
        justifyContent: 'center',
    },
    touchable1: {
        borderRadius: 20,
        width: 110,
        height: 30,
        justifyContent: 'center'
    },
    header: {
        backgroundColor: "white",
        justifyContent: 'center',
    },
    body: {
        backgroundColor: "white",
    },
});
export default Header;