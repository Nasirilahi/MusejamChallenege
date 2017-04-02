import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ListView,
} from 'react-native';
import styles from './styles';
import ListRow from './ListRow';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ListContainer extends Component{
    constructor() {
        super();
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }
    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.data),
        })

    }
    viewProjectDetailsPage = (url)=>{
    this.props.navigator.push({name: 'ProjectDetails', url: url});
    };
    render(){
        return(
            <View style={styles.listContainer}>
                <ScrollView>
                    {
                        this.props.data &&
                        <ListView
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) => <ListRow rowData={rowData} viewPage={this.viewProjectDetailsPage} />}
                        />

                    }
                </ScrollView>
            </View>
        );
    }
}

export default ListContainer;