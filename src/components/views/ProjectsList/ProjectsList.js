import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'
import Header from './Header';
import ListContainer from './ListContainer';

class ProjectList extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <ListContainer data={this.props.projectList.data} {...this.props}/>
            </View>
        );
    }
}

const mapStateToProps= ({projectList}) =>{
    return{
        projectList
    };
};

export default connect(mapStateToProps)(ProjectList);