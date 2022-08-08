import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
const color = require('../Utils/Colors.js');

export default function PostsListItem({ item, index, callBackPostClick }) {


    return (
        <TouchableOpacity
            onPress={() => callBackPostClick(item, index)}
            style={{ flexDirection: 'column', flex: 0.5, borderColor: 'gray', marginVertical: 10 }}
        >
            <View
                style={[styles.item, { flexDirection: 'column', }]}
            //onPress={() => navigation.navigate("AdDetailScreen")}
            >
                <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', }}>

                        <Image
                            source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' }}
                            style={styles.circleImage}
                        />

                        {/*render User Info*/}
                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}> {item.name} </Text>
                            <Text> {item.time} </Text>
                        </View>
                    </View>

                    {/*Render Description*/}
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>{item.title.length > 25 ? item.title.substring(0, 25) + ' ...' : item.title}</Text>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{item.postDescription}</Text>

                    </View>


                </View>

                <View style={{ flexDirection: 'column' }}>


                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 300, margin: 10, height: 300, borderRadius: 3, borderColor: 'black' }}
                        resizeMode={'cover'}
                    />


                    {/*render number of Likes, Comments*/}
                    <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
                        <Text> 1 Like .  </Text>
                        <Text> 4 comments</Text>
                    </View>


                    {/*rendering Like and Comment Buttons*/}

                    <View style={{ flexDirection: 'row', flex: 1, paddingVertical: 10, justifyContent: 'center', }}>
                        {/*Like Button*/}
                        <TouchableOpacity
                            onPress={() => savedFavourite(index)}
                            style={styles.optionsItem}

                        >
                            <View style={styles.optionsItem}>

                                <Image
                                    //source={require('../../resources/png/ic_like1.png')}
                                    source={item.isFav ? require('../../resources/png/ic_like1.png') : require('../../resources/png/ic_liked_filled.png')}
                                    style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                    resizeMode={'contain'}
                                />
                                <Text style={{ fontWeight: item.isFav ? 'normal' : 'bold', height: 20 }}> Like </Text>

                            </View>
                        </TouchableOpacity>

                        {/*Comment Button*/}
                        <View style={styles.optionsItem}>
                            <Image
                                source={require('../../resources/png/ic_comment.png')}
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                resizeMode={'contain'}
                            />
                            <Text style={{ alignSelf: 'center', height: 20 }}> Comment </Text>
                        </View>

                        {/*chat Button*/}

                        <TouchableOpacity
                            style={styles.optionsItem}
                            onPress={() => navigation.navigate('ChatGifted', {
                                postId: item.postId, userId: item.userId, name: 'manem', email: 'oo@gmail.com', avatar: demoUserPic
                            })}
                        >

                            <View style={styles.optionsItem}>
                                <Image
                                    source={require('../../resources/png/ic_send_unfill.png')}
                                    style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                    resizeMode={'contain'}
                                />
                                <Text style={{ alignSelf: 'center', height: 20, }}> Chat </Text>
                            </View>
                        </TouchableOpacity>


                    </View>


                </View>

            </View >
        </TouchableOpacity>
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        flexDirection: 'column',
        backgroundColor: color.whiteColor,
    },
    optionTextStyle: {
        color: '#eee',
    },
    circleImage: {
        width: 50,
        height: 50,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    },
    optionsItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5,
        //borderWidth: 1,
        alignSelf: 'center'
        //alignSelf: 'center'
    }

});