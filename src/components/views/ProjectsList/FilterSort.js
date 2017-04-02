import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';

const FilterSort = ()=>{
    return(
        <View style={styles.filterSortContainer}>
            <Menu onSelect={(value) => console.log(`Sort by ${value}`)}>
                    <MenuTrigger style={styles.menuTrigger}>
                        <Icon name='sort-amount-desc' size={20} color='#a9a9a9'/>
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                        <MenuOption value='sorByAlphabet'>
                            <Text style={styles.menuOpetionsText}>Sort Alphabetically</Text>
                        </MenuOption>
                        <MenuOption value='sortByTime'>
                            <Text style={styles.menuOpetionsText}>Sort by Time</Text>
                        </MenuOption>
                    </MenuOptions>
            </Menu>
            <Menu onSelect={(value) => console.log(`filter by number ${value}`)}>
                <MenuTrigger style={styles.menuTrigger}>
                    <Icon name='filter' size={20} color='#a9a9a9'/>
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                    <MenuOption value='sorByAlphabet'>
                        <Text style={styles.menuOpetionsText}>Filter by number of backers</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    );
};

export default FilterSort;