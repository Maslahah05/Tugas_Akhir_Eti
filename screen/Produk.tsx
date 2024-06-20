import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'
        }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            textAlign:"center",
        }}>Butik Zeeyana</Text>
        <Text style={{
            fontSize:10,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://img.ws.mms.shopee.co.id/id-11134201-23030-7ryk6oxconov3c")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.890.000, tersedia 38pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://img.lazcdn.com/g/p/526778dea1ec434644a31c46e3400f1a.jpg_720x720q80.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.2.000.000, tersedia 27pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image 
        source={{
            uri:("https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2024/1/20/3b336d67-a4a4-4f44-a3fe-83929888f218.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.335.000, tersedia 80pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2023/9/15/cb51d53a-de62-45d7-bac1-f82745935a56.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.550.000, tersedia 23pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/13/ba818a2b-e0e8-494b-8697-5ed70372736b.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.655.000, tersedia 35pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/3/25/58936a97-e22d-4896-8428-c1a756c99d21.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.760.000, tersedia 50pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hf2KqdpcO_0d6fTcWeZAyzupqIzIuX9k9g&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.1.850.000, tersedia 15pcs</Text>
        </ScrollView>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        </View>
    )
}