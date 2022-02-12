import { getData, saveData } from "../utils";
import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE,DELETE_DATA, GET_DATA_LOCAL} from "./actionTypes";

const initForm = {
  first_name:"",
  last_name:"",
  email:""
};

const intiState = {
  isLoading:false,
  isError:false,
  data:[],
  form:initForm
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
    saveData("listitem",payload);
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
  case DELETE_DATA: {
    let filterData = state.data?.filter(e => e.id !== payload);
    saveData("listitem",filterData);
    return {
      ...state,
      data:filterData,
      isLoading:false,
      isError:false
    };
  }

  case GET_DATA_LOCAL: {
    return{
      ...state,
      data: getData("listitem") || []
    };
  }
  default:
    return state;
  }
};

export default reducer;