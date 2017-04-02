import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView
} from 'react-native';
import {ProjectDetails_URL} from '../../../constants/ApiConstants';


const ProjectsDetails = (props)=>{
    const uri = `${ProjectDetails_URL}${props.route.url}`;
    return(
        <WebView
            source={{uri:uri}}
            style={{marginTop: 20}}
        />
    );
};

export default ProjectsDetails;