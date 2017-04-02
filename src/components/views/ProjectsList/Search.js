import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import styles from './styles';

const Search = ()=>{
    return(
        <View style={styles.searchContainer}>
            <Icon name='search' size={20} color='#a9a9a9'/>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => console.log(text)}
                placeholder={'Search by name'}
                autoCapitalize='none'
                placeholderTextColor='grey'
            />
        </View>
    );
};

export default Search;