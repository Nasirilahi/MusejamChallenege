import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import styles from './styles';
import Search from './Search';
import FilterSort from './FilterSort';

const Header = ({searchText,setSearchText})=>{
    return(
        <View style={styles.headerContainer}>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <FilterSort/>
        </View>
    );
};

export default Header;