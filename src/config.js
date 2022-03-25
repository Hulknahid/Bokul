export function Config() {
    switch(process.env.REACT_APP_ENV){
      case "dev":
        return {
          serverUrl: "https://silverbird-api-dev0.herokuapp.com/",
          recordsPageSize: 9,
          STORE_ID: "(eterna-day-spa|salon-h2o|cloud-9-salon|eterna-lash-brow)",
          
        };
      case "prod":
        return {
          serverUrl: "https://silverbird-api-dev0.herokuapp.com/",
          recordsPageSize: 9,
          STORE_ID: "(eterna-day-spa|cloud-9-salon|salon-h2o|eterna-lash-brow)",
        
        }
      case "qa":
        return {
          serverUrl: "https://silverbird-api-dev0.herokuapp.com/",
          recordsPageSize: 9,
          STORE_ID: "(eterna-day-spa|cloud-9-salon|salon-h2o|eterna-lash-brow)",
    
        }
      default:
          alert()
        return {
          serverUrl: "https://dev-api-v2.silverbird.io/",
          recordsPageSize: 9,
          STORE_ID: "(eterna-day-spa|cloud-9-salon|salon-h2o|eterna-lash-brow)",
          appVersion:"2.3.9"
        }
    }
  }