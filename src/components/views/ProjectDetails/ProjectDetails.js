import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    View,
    Text,
    WebView,
    TouchableOpacity
} from 'react-native';
import {ProjectDetails_URL} from '../../../constants/ApiConstants';
import Loader from '../Loader';

const WebViewComponent = ({uri}) => (
    <WebView
        source={{uri:uri}}
        style={{top:-40}}
        renderLoading ={() => <Loader/>}
        startInLoadingState={true}
    />
);


const ProjectsDetails = (props)=>{
    const uri = `${ProjectDetails_URL}${props.route.url}`;
    return(
        <View style={{flex:1}}>
            <TouchableOpacity style={{zIndex:10,marginTop:20,marginLeft:15,}} onPress={()=> props.navigator.pop()}>
               <Icon name='long-arrow-left' size={20} color='rgba(0,0,0,0.54)' />
            </TouchableOpacity>
            <WebViewComponent uri={uri}/>
        </View>
    );
};

export default ProjectsDetails;