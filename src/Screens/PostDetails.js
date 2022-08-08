import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import PostsListItem from '../Components/PostItem.js';
import { Comment_DATA } from '../Utils/CommentData.js';
const color = require('../Utils/Colors.js');

export default function PostDetailScreen({ navigation, route }) {
    const [refreshing, setRefreshing] = useState(false);
    var item = route.params.item;
    var index = route.params.index;

    // List Item Component
    const renderPostItem = (item, index) => {

        return <PostsListItem
            item={item}
            index={index}
            callBackPostClick={callBackPostClick}
        />
    }

    const callBackPostClick = () => {

    }

    // REMARKS COMMENT LIST
    const renderCommentList = () => {
        return (
            <View>
                <FlatList
                    data={Comment_DATA}
                    //renderItem={({ item, index }) => renderItem(item, index)}
                    renderItem={({ item, index }) => renderCommentListItem(item, index)}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    const renderCommentListItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>

                <Image
                    source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' }}
                    style={{ width: 20, height: 20, alignSelf: 'flex-start', marginTop: 10, marginRight: 10, padding: 10, }}
                />

                <View style={{ flexDirection: 'column', alignSelf: 'center', backgroundColor: '#F0F2F5', borderRadius: 20, padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> {item.name}</Text>
                    <Text> {item.title}</Text>
                </View>

                {/*<Text> {item.title}</Text>*/}
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {renderPostItem(item, index)}
                {renderCommentList()}
            </View>
        </ScrollView>
    )
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

});