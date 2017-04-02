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
    constructor(props){
        super(props);
        this.state = {
            searchText:'',
        }
    }

    setSearchText = (searchText) => {
        this.setState({searchText});
    };

    render(){
        return(
            <View style={styles.container}>
                <Header
                    searchText={this.state.searchText}
                    setSearchText={this.setSearchText}
                />
                <ListContainer data={this.props.projectList.data} {...this.props} searchText={this.state.searchText} />
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