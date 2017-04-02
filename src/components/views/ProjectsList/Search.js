import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import styles from './styles';

/**
 * Search bar component
 * **/
const Search = ({searchText,setSearchText})=>{
    return(
        <View style={styles.searchContainer}>
            <Icon name='search' size={20} color='#a9a9a9'/>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setSearchText(text)}
                placeholder={'Search by name'}
                autoCapitalize='none'
                placeholderTextColor='grey'
                value={searchText}
            />
        </View>
    );
};

export default Search;