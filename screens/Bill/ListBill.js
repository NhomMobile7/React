import * as React from 'react';
import { Text, View, Button} from 'react-native';



export default function ListBill({ navigation }){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Bill Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('AddProduct')}
                />
            </View>
        );        
}


