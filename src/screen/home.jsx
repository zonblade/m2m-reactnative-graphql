import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native'
import { gql, useQuery } from '@apollo/client';

const GET_ITEM_LIST = gql`
  query GetItemList($search: String!) {
    itemsList(search: $search, user_id:"") {
      id
      name
      category
      image
      price
      availability
    }
  }
`;

function SearchBar({ state, setState }) {
    console.log(state)
    return (
        <View>
            <TextInput placeholder="Search" value={state} onChangeText={(data) => { setState(data) }} />
        </View>
    )
}

export default function HomeSettings() {
    const [search, setSearch] = useState('');
    const { loading, error, data } = useQuery(GET_ITEM_LIST, {
        variables: { search: search },
    });
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, maxHeight: 48, borderColor:'grey', borderWidth:1, width:'100%'}}>
                <SearchBar state={search} setState={setSearch} />
            </View>
            <View style={{ flex: 1, display: 'flex', width: '100%' }}>
                <ScrollView style={{ flex: 1 }}>
                    {loading ?
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Text>Loading ...</Text>
                        </View>:
                        data.itemsList.map((item) => {
                            console.log(item)
                            return (
                                <View key={item.id} style={{display:'flex', flexDirection:'row'}}>
                                    <View style={{flex:1,maxWidth:72,padding:8}}>
                                        <Image source={{uri:'https://picsum.photos/64'}} style={{height:64,width:64,borderRadius:10,backgroundColor:'grey'}}></Image>
                                    </View>
                                    <View style={{flex:1, justifyContent:'center', display:'flex', flexDirection:'column', padding:10}}>
                                        <Text style={{fontSize:14}}>{item.name}</Text>
                                        <Text style={{fontSize:12}}>Category: {item.category}</Text>
                                    </View>
                                    <View style={{flex:1, justifyContent:'center', display:'flex', flexDirection:'column', padding:10}}>
                                        <Text style={{fontSize:12}}>IDR. {item.price}</Text>
                                        <Text style={{fontSize:12}}>Stock: {item.availability}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection:'column-reverse',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})