import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import ArrowIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

/**
 * list View single row component
 * **/

const Row = (props) =>{
    const {rowData,viewPage } = props;
    return(
        <View style={styles.container}>
           <View style={styles.dataContainer}>
               <Text style={styles.titleText}>{`${rowData.title}`}</Text>
               <View style={styles.detailContainer}>
                   <Text style={{color :'#D1A828'}}>{'Pleadge -'}</Text>
                   <Text style={styles.amountText}>{rowData['amt.pledged']}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={{color :'#D1A828'}}>{'Backer - '}</Text>
                   <Text style={styles.amountText}>{rowData['num.backers']}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={{color :'#D1A828'}}>{'End Date -'}</Text>
                   <Text style={[styles.amountText,]}>{moment(rowData['end.time']).format('ll')}</Text>
               </View>
           </View>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>viewPage(rowData.url)}>
                    <Icon name='ios-arrow-forward' color='#a9a9a9' size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        padding:5,
        marginBottom:10,
        borderRadius:3,
        backgroundColor:'white',
    },
    dataContainer:{
        flex:1,
    },
    arrowContainer:{
        marginLeft:5,
        justifyContent:'center',
        paddingHorizontal:8,
    },
    detailContainer:{
        flexDirection:'row',
        marginBottom:5,
    },
    titleText: {
        fontSize: 16,
        color:'#63aede',
        marginBottom:5,
    },
    amountText:{
        color:'rgba(0,0,0,0.54)',
    },
});

export default Row;