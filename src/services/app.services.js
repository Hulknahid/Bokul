export const AppServices={
    getBusinessInfo
}

function getBusinessInfo(){
    const requestOptions = {
        header:{
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        method:'GET'
    } 
    let url = 'https://api-v2.silverbird.io/businesses/123456789'

    return fetch(url,requestOptions).then(response=>{
        return response.json()
    }).catch(e=>{
        console.log(e);
    })
}