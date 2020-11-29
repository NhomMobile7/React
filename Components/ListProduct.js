import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
class ListProduct extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#CFCFCF', flexDirection: 'column', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.componentProduct}>
                        <Text style={styles.borderleft} />
                        <Image style={{ width: 90, height: 60, marginTop: 10, marginLeft: 10, resizeMode: 'cover' }} source={require('../assets/com.jpg')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ width: 180, paddingTop: 10, paddingLeft: 10, paddingRight: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Cơm Tấm</Text>
                            <Text style={{ width: 180, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Giá: 20.000</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{
                            height: 60,
                            backgroundColor: "grey",
                            borderLeftWidth: 1,
                            borderStyle: 'dashed',
                        }} />
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: 60, height: 80, justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    borderleft: {
        backgroundColor: '#2FD5CF',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        height: 80,
        width: 15,
        textAlign: "center"
    },
    componentProduct: {
        flexDirection: "row",
        backgroundColor: 'white',
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10,
        height: 80,
        justifyContent: 'center'
    }
});

export default ListProduct; 