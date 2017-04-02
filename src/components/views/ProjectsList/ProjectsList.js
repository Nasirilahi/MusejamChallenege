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
import { sortBy } from '../../../actions/sortActions';
import { bindActionCreators } from 'redux';

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

    render(){
        return(
            <MenuContext style={{ flex: 1 }} ref='MenuContext'>
                <View style={styles.container}>
                    <Header
                        searchText={this.state.searchText}
                        setSearchText={this.setSearchText}
                        sortingListView={this.props.sortByAction}
                    />
                    <ListContainer
                        data={this.props.projectList.data} {...this.props}
                        searchText={this.state.searchText}
                    />
                </View>
            </MenuContext>
        );
    }
}

const mapStateToProps= ({projectList,sortBy}) =>{
    return{
        projectList,
        sortBy,
    };
};
const mapDispatchToProps = (dispatch) =>{
    return{
        sortByAction: bindActionCreators(sortBy, dispatch)

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);