const axios = require('axios');
require('dotenv').config();

/**
 * request Stores List
*/
const requestStoresList = async function(clcCoordinates) {
    let lstStores = [];
    const objConfig = {
        headers: {
          /* TODO - Generar token con servicio de autenticacion */
          'Authorization': 'Bearer c2JucW83SXZnTUk5a25qMHVmMVBvNm84ZkZQb3Vt' 
        }
      }
    const objRequest = {
        "lat": clcCoordinates[0],
        "lng": clcCoordinates[1],
        "store_type":"restaurant",
        "is_prime":false,
        "states":["opened","unavailable"]
    };
    axios.post(
        `${process.env.API_GRABILITY_ENDPOINT}/api/restaurant-bus/stores/catalog/home/v2`,
        objRequest,
        objConfig  
    ).then(response => {
        if (response.status == 200) {
            let srvData = response.data;
            // console.log('Response stores: ', srvData.stores);
            lstStores = srvData.stores;
        }
    }).catch(e => {
        console.log(e);
    });
    return lstStores;
}
module.exports = {
    requestStoresList: requestStoresList
}