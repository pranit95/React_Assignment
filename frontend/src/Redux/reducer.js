import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE} from './actionTypes';

const intiState = {
    isLoading:false,
    isError:false,
    data:[]
};

const reducer = (state = intiState, {type, payload}) => {
    switch (type){
    case GET_DATA_REQUEST:{
        return {
            ...state,
            isLoading:true,
            isError:false
        };
    }
    case GET_DATA_SUCCESS:{
        return {
            ...state,
            data:[...payload],
            isLoading:false,
            isError:false
        };
    }
    case GET_DATA_FAILURE:{
        return {
            ...state,
            isLoading:false,
            isError:true,
        };
    }
    default:
        return state;
    }
};

export default reducer;