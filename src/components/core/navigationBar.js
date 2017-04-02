import React from 'react';
import {
    Navigator,
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import COLOR from '../../constants/ColorConstants';
import {getCorrectPixel} from '../../util/DefaultStyle';
import DeviceInfo from 'react-native-device-info';

const LeftComponent = (props)=> {
    return(
        <View style={styles.leftButton}>
            <TouchableOpacity onPress={props.openDrawer} style={{width:50 }}>
                <Image
                    source={require('../../assets/images/navIcon/menu.png')}
                    style={styles.leftNavButton}
                />
            </TouchableOpacity>
            <Text style={styles.leftText}>{`${props.currentRoute.title}`}</Text>
        </View>
    );
};

const RightComponent = ()=>{
    return(
        <View style={styles.rightButton}>
                <TouchableOpacity style={{width:25,}}>
                    <Image
                        source={require('../../assets/images/refreshIcon/actualizar.png')}
                        style={styles.rightRefreshButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width:20,marginLeft:20}} >
                    <Image
                        source={require('../../assets/images/menuIcon/mas.png')}
                        style={styles.rightMenuButton}
                    />
                </TouchableOpacity>
        </View>
    );
};

const TitleComponent = ()=> {
    return(
        <View style={styles.TitleContainer}>
            <Image
                resizeMode='contain'
                source={require('../../assets/images/Titlelogo/logo_tc.png')} />
        </View>
    );
};

const NavigationBar = (props)=>{
    return(
        <View style={styles.navBarContainer}>
            <LeftComponent  openDrawer={props.openDrawer} currentRoute={props.navState.routeStack[props.navState.routeStack.length-1]} />
            {
                props.IS_TABLET ?   <TitleComponent/> : null
            }
            <RightComponent/>
        </View>
    );
};
/*
const NavigationBar = (openDrawer,IS_TABLET) => ({
    LeftButton(route, navigator, index, navState){
        return <LeftComponent name={route.name} openDrawer={openDrawer} />
    },
    RightButton(route, navigator, index, navState)
    {
        return <RightComponent />;
    },
    Title(route, navigator, index, navState){
        if(IS_TABLET){
            return <TitleComponent/>
        }
        else{
            return null;
        }
    }
});
*/
const styles = StyleSheet.create({
    navBarContainer:{
        backgroundColor:COLOR.BLUE_TEAMCORE_DARK,
        top:0,
        right:0,
        left:0,
        position:'absolute',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop: DeviceInfo.isTablet() ? 10:25,
        paddingBottom:10,
        elevation: 10,
        shadowColor:'rgba(0,0,0,0.24)',
        shadowOpacity:10,
        shadowOffset:{height:5,}
    },
    leftButton:{
        flex:1,
        flexDirection :'row',
        paddingHorizontal:20,
        alignItems:'center',
    },
    leftText:{
        color:COLOR.WHITE,
        fontSize:20,
    },
    leftNavButton:{
        height:15,
        width:20
    },
    rightButton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingHorizontal:15,
    },
    rightRefreshButton:{
        width:15,
        height:20,
    },
    rightMenuButton:{
        height:20,
        width:4,
    },
    TitleContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    TitleText:{
        color:COLOR.WHITE,
    },
});

export default NavigationBar;