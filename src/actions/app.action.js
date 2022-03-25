import { AppServices } from "../services/app.services"

export const AppAction={
    getBusinessInfo
}

function getBusinessInfo(){
    return AppServices.getBusinessInfo().then(response=>{
       return response
    }).catch(e=>{
        console.log(e);
    })
}

