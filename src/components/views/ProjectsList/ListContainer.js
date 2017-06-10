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
import { connect } from 'react-redux';
import NotFoundView from './NotFoundView';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
/*
 *
 * functional ListView component to show projects list
 * **/

class ListContainer extends Component{
    constructor() {
        super();
        this.state = {
            dataSource: ds.cloneWithRows([]),
            noResult : false,
        };
    }
    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.data),
        });
    }
    componentWillReceiveProps = (nextProps) => {
       if(nextProps.searchText !== ''){
           this.searchResult(nextProps.searchText);
       }
       if(nextProps.sortBy.sort_by !== '' && nextProps.sortBy.sort_by !== this.props.sortBy.sort_by){
           this.sortedResult(nextProps.sortBy.sort_by);
       }
    };

    searchResult = (value) => {
        let text = value.toLowerCase();
        let filteredData = this.props.data.filter((row) => {
            let projectCell = row.title.toLowerCase();
            return  projectCell.search(text) !== -1;
        });
        if(filteredData.length > 0){
            this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filteredData),
            noResult:false,
            });   
        }
        else{
            this.setState({noResult:true});
        }
    };

    sortedResult = (sortBy) => {
       let newArray = this.props.data.slice();
       if(sortBy === 'sortByAlphabet'){
           let alphabaticallySorted = newArray.sort((a,b)=> {
                let textA = a.title.toUpperCase();
                let textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
           });
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(alphabaticallySorted),
           });
           //this.forceUpdate();
       }
       if(sortBy === 'sortByTime'){

           let dateSortedData = newArray.sort((a,b) => {
               const c = new Date(a['end.time']);
               const d = new Date(b['end.time']);
               return c - d;
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
                {
                    !this.state.noResult ?  
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
                    </ScrollView> :
                    <NotFoundView />
                   
                }
            </View>
        );
    }
}

const mapStateToProps= ({sortBy}) => sortBy;

export default connect(mapStateToProps)(ListContainer);
