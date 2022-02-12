export const saveData = function(key,data){
  localStorage.setItem(key,JSON.stringify(data));
};

export const getData = function(key){
  if(localStorage.getItem(key)){
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  }else{
    return null;
  }
};