import {
    SORT_BY
} from '../constants/ActionsConstants';


export function sortBy(sort_by){
    return{
        type:SORT_BY,
        sort_by,
    };
}
