import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
} from 'react-native';
const color = require('../Utils/Colors.js');
import PostsListItem from '../Components/PostItem.js';
import { DATA } from '../Utils/Data.js'

export default function PostsList({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);

    // List Item Component
    const renderPostItem = (item, index) => {

        return <PostsListItem
            item={item}
            index={index}
            callBackPostClick={callBackPostClick}
        />
    }

    const callBackPostClick = (item, index) => {
        navigation.navigate("PostDetailScreen", {
            item: item,
            index: index
        })
    }

    const renderPostsList = () => {
        return (
            <View style={{ flexDirection: 'column' }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => renderPostItem(item, index)}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                        />
                    }
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderPostsList()}
        </View>
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

});