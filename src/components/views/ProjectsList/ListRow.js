import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        padding:5,
        marginBottom:10,
        borderColor:'rgba(0,0,0,0.20)',
        borderWidth:1,
        borderRadius:3,
        elevation: 3,
        shadowColor:'rgba(0,0,0,0.24)',
        shadowOpacity:10,
        shadowOffset:{height:5,},
        backgroundColor:'white',
    },
    dataContainer:{
        flex:1,
    },
    arrowContainer:{
        marginLeft:5,
        justifyContent:'center',
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
    arrowText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#a9a9a9',
    },
    amountText:{
        color:'rgba(0,0,0,0.54)',
    },
});

const Row = (props) =>{
    const {rowData,viewPage } = props;
    return(
        <View style={styles.container}>
           <View style={styles.dataContainer}>
               <Text style={styles.titleText}>{`${rowData.title}`}</Text>
               <View style={styles.detailContainer}>
                   <Text>{'Pleadge -'}</Text>
                   <Text style={styles.amountText}>{rowData['amt.pledged']}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text>{'Backer - '}</Text>
                   <Text style={styles.amountText}>{rowData['num.backers']}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text>{'By -'}</Text>
                   <Text style={styles.amountText}>{rowData.by}</Text>
               </View>
           </View>
            <TouchableOpacity style={styles.arrowContainer} onPress={()=>viewPage(rowData.url)}>
                    <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Row;