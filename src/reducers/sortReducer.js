import {
  SORT_BY
} from '../constants/ActionsConstants';

const initialState ={
   sort_by:'',
};

export default function loginReducer(state=initialState , action){

    switch (action.type) {
        case SORT_BY:
            return {...state, sort_by:action.sort_by};
        default:
            return state ;
    }
}
