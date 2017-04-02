import {
    PROJECT_LIST_REQUREST ,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE
} from '../constants/ActionsConstants';
import { API_URL } from '../constants/ApiConstants';


export function getProjectsList(){
    return (dispatch)=> {
        dispatch(projectListRequest());
        fetch(API_URL)
            .then((response) => response.json())
            .then(data => {
                return dispatch(projectListSuccess(data));
            })
            .catch((err)=>{

            return dispatch(projectListFailure(err));
            });
    };
}

/*
*action when ajax request has been made
 */
function projectListRequest(){
    return{
        type:PROJECT_LIST_REQUREST,
    };
}

/**
 * action when success response recieved
 * */
function projectListSuccess(data){
    return{
        type:PROJECT_LIST_SUCCESS,
        data
    };
}

/**
 * action when error response recieved
 * */
function projectListFailure(err){
    return{
        type:PROJECT_LIST_FAILURE,
        err
    };
}
