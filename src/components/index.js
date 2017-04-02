import React, { Component } from 'react';
import {
    Navigator,
    StyleSheet,
    View,
    Text,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {getProjectsList} from '../actions/projectListAction';
/**
 * imported all components here
 * */
import ProjectDetails from './views/ProjectDetails/ProjectDetails';
import ProjectsList from './views/ProjectsList/ProjectsList';

/**
 * We can put all components who will be views in application in to a constants object
 * then simply pass the name as a key to this object to render a particular page.
 * Another way we can use switch case in renderScene function to render the particular view.
 * */
const ROUTES = {
    ProjectsList,
    ProjectDetails,
};


/**
 * This component is responsible only for navigation.
 * */

class Main extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount = ()=>{
        this.props.getProjectsList();
    };

    /**
     *  render scene function use in Navigator component to tell which view is to be render.
     * */

    renderScene = (route, navigator)=>{
         let Component = ROUTES[route.name];
         return <Component route={route} navigator={navigator} />;
    };

    render(){
        const { projectList } = this.props;
        const { isLoading } = projectList;
        if(isLoading){
            return(
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <ActivityIndicator
                        animating={true}
                        style={[styles.centering, {height: 80}]}
                        size="large"
                    />
                </View>
            );
        }
        else{
            return(
                    <View style={{flex:1}}>
                        <StatusBar
                            barStyle='light-content'
                        />
                        <Navigator
                            style={{}}
                            initialRoute={{  name:'ProjectsList' }}
                            ref={(nav)=> this.navigator = nav}
                            renderScene={this.renderScene}
                            configureScene={()=> { return Navigator.SceneConfigs.FloatFromRight}}
                        />
                    </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    }
});

const mapStateToProps = ({projectList})=>{
    return{
        projectList
    };
};

function mapDispatchToProps(dispatch){
    return{
        getProjectsList: bindActionCreators(getProjectsList, dispatch)

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);