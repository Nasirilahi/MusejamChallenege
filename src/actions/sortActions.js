import {
    SORT_BY
} from '../constants/ActionsConstants';

/**
 * action for sorting
 * */
export function sortBy(sort_by){
    return{
        type:SORT_BY,
        sort_by,
    };
}
