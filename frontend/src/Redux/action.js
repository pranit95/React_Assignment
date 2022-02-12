import axios from "axios";
import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE,DELETE_DATA, GET_DATA_LOCAL} from "./actionTypes";


const getDataRequest = () => {
  return {
    type:GET_DATA_REQUEST,
  };
};

const getDataSuccess = (payload) => {
  return {
    type:GET_DATA_SUCCESS,
    payload
  };
};
const getDataFailure = (payload) => {
  return {
    type:GET_DATA_FAILURE,
    payload
  };
};

const deleteData = (payload) => {
  return{
    type: DELETE_DATA,
    payload
  };
};

const getDataFromLocal = () => {
  return{
    type: GET_DATA_LOCAL
  };
};

const getDataApi = () => dispatch => {
  dispatch(getDataRequest());
    
  return axios.get("https://reqres.in/api/users?page=1")
    .then(res => {
      // console.log('Res ==> ',res.data.data);
      dispatch(getDataSuccess(res.data && res.data.data));
    })
    .catch(err => {
      console.log("error",err);
      dispatch(getDataFailure(err));
    });
};

export {getDataApi,getDataRequest,getDataSuccess,getDataFailure,deleteData, getDataFromLocal}; 