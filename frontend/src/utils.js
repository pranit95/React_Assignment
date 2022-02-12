export const saveData = function(key,data){
    localStorage.setItem(key,JSON.stringify(data));
};

export const getData = function(key){
    let data = localStorage.getItem(key) || '';
    console.log(data);
    return data;
};