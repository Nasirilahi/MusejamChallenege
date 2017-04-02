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

const Header = ({searchText,setSearchText, sortingListView})=>{
    return(
        <View style={styles.headerContainer}>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <FilterSort
                sortingListView={sortingListView}
            />
        </View>
    );
};

export default Header;