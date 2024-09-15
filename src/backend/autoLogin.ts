import { apiToken } from "../utillities/api";
import { dataKrakenGives } from "../backend/dataKraken";
export async function  autoLogin () {

    if(!localStorage.getItem("pp-token")) return false

    try{

    const response = await  apiToken.get(`/user`)

    if(response.status >= 200 && response.status < 300){
        const response = await dataKrakenGives() 
        
        if(response && response.success  ){
            sessionStorage.setItem("userStats",JSON.stringify( response.data))
            return true
        }else{
            return false
        }
    } 
    }catch(error){

        console.log(error)
    }

  }