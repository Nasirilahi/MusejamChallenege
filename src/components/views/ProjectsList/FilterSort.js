import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import styles from './styles';

const FilterSort = ()=>{
    return(
        <View style={styles.filterSortContainer}>
            <Icon name='sort-amount-desc' size={20} color='#a9a9a9'/>
            <Icon name='sort-amount-desc' size={20} color='#a9a9a9'/>
        </View>
    );
};

export default FilterSort;