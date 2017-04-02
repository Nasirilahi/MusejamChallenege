import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import { MenuContext } from 'react-native-menu';
import styles from './styles'
import Header from './Header';
import ListContainer from './ListContainer';

class ProjectList extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:'',
            sortBy:'',
        }
    }

    setSearchText = (searchText) => {
        this.setState({searchText});
    };

    sortingListView = (sortBy) => {
        this.setState({sortBy});
    };
    render(){
        return(
            <MenuContext style={{ flex: 1 }} ref='MenuContext'>
                <View style={styles.container}>
                    <Header
                        searchText={this.state.searchText}
                        setSearchText={this.setSearchText}
                        sortingListView={this.sortingListView}
                    />
                    <ListContainer
                        data={this.props.projectList.data} {...this.props}
                        searchText={this.state.searchText}
                        sortBy={this.state.sortBy}
                    />
                </View>
            </MenuContext>
        );
    }
}

const mapStateToProps= ({projectList}) =>{
    return{
        projectList
    };
};

export default connect(mapStateToProps)(ProjectList);