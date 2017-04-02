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
    componentWillReceiveProps = (nextProps) => {
       if(nextProps.searchText){
           this.searchResult(nextProps.searchText);
       }
        if(nextProps.sortBy){
            this.sortedResult(nextProps.sortBy);
        }
        // if(nextProps.data){
        //     this.setState({ dataSource:this.state.dataSource.cloneWithRows(nextProps.data)});
        // }
    };

    searchResult = (value) => {
        let text = value.toLowerCase();
        let filteredData = this.props.data.filter((row) => {
            let projectCell = row.title.toLowerCase();
            return  projectCell.search(text) !== -1;
        });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filteredData),
        });
    };

    sortedResult = (sortBy) => {
       if(sortBy === 'sortByAlphabet'){
           let alphabaticallySorted = this.props.data.sort((a,b)=> {
               let titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
               if (titleA < titleB)
                   return -1;
               if (titleA > titleB)
                   return 1;
               return 0;
           });
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(alphabaticallySorted),
           });
       }
       if(sortBy === 'sortByTime'){
           let dateSortedData = this.props.data.sort((a,b) => {
               const c = new Date(a['end.time']);
               const d = new Date(b['end.time']);
               return c > d ? 1 : -1;
           });
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(dateSortedData),
           });
       }
    };

    viewProjectDetailsPage = (url)=>{
    this.props.navigator.push({name: 'ProjectDetails', url: url});
    };

    render(){

        return(
            <View style={styles.listContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        this.props.data &&
                        <ListView
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) => <ListRow rowData={rowData} viewPage={this.viewProjectDetailsPage} sortingListView={this.sortingListView}  />
                            }
                        />

                    }
                </ScrollView>
            </View>
        );
    }
}

export default ListContainer;