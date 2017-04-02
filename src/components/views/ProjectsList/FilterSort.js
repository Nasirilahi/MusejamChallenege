import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

const FilterSort = ()=>{
    return(
        <View style={styles.filterSortContainer}>
            <TouchableOpacity  style={{width:40,alignItems:'center',}}  onPress={()=> console.log('sort')}>
                <Icon name='sort-amount-desc' size={20} color='#a9a9a9'/>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft:10,width:40,alignItems:'center',}} onPress={()=>console.log('filter')}>
                <Icon name='filter' size={20} color='#a9a9a9'/>
            </TouchableOpacity>
        </View>
    );
};

export default FilterSort;