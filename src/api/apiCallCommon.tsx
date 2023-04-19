import axios from "axios";

const getinitialized = (contetType:any, responseType: any) =>{
    let api = axios.create({
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Beare-Token': '2232saddasdasd'
        },
      });
      return api;
};


export const getRequest = (url: any, headers: any) =>{
    return getinitialized('application/json', headers).get(url, headers).catch((error: any)=>{console.log(error)})
};

export const postRequest = (url: any, headers: any) =>{
    return getinitialized('application/json', headers).post(url, headers).catch((error: any)=>{console.log(error)})
};

