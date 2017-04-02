import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const Row = (props) =>{
    const {rowData,viewPage } = props;
    return(
        <TouchableHighlight underlayColor={'#E8E8E8'} onPress={()=>viewPage(rowData.url)}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {`${rowData.title}`}
            </Text>
        </View>
        </TouchableHighlight>
    );
};

export default Row;