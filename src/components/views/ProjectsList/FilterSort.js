import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import styles from './styles';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';

/*
 *
 * functional Filter component filter/Sorting options
 * **/

const FilterSort = ({sortingListView})=>{
    return(
        <View style={styles.filterSortContainer}>
            <Menu onSelect={(value) => sortingListView(value)}>
                    <MenuTrigger style={styles.menuTrigger}>
                        <Icon style={{backgroundColor:'transparent'}}  name='sort-amount-desc' size={20} color='white'/>
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                        <MenuOption value='sortByAlphabet'>
                            <Text style={styles.menuOpetionsText}>Sort Alphabetically</Text>
                        </MenuOption>
                        <MenuOption value='sortByTime'>
                            <Text style={styles.menuOpetionsText}>Sort by Time</Text>
                        </MenuOption>
                    </MenuOptions>
            </Menu>
            <Menu onSelect={(value) => console.log(value)}>
                <MenuTrigger style={styles.menuTrigger}>
                    <Icon  style={{backgroundColor:'transparent'}}  name='filter' size={20} color='white'/>
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                    <MenuOption value='filterbyNumber'>
                        <Text style={styles.menuOpetionsText}>Filter by number of backers</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    );
};

export default FilterSort;