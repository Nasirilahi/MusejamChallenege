import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    listContainer:{
        flex:9,
        flexDirection:'row',
        borderColor:'yellow',
        borderWidth:1,
    },
    searchContainer:{
        flexDirection:'row',
        flex:1,
        marginLeft:15,
        marginRight:15,
    },
    textInput:{
        flex:1,
        marginLeft:10,
    },
    filterSortContainer:{
        flexDirection:'row',
        marginRight:15,
    },
});

export default styles;