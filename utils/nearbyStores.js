const mdlApiStores = require('../api/clients/stores/stores');

const mdlDistance  = require('./distance');

const defineNearbyStores = async function() {
    let arrMeters      = [1000, 2000, 3000, 4000, 5000, 6000]; //sample distances.
    let clcCoordinates = {};
    if (lstStores.count > 0) {
        arrMeters.forEach(meters => {
        //for (let pos = 0; pos < arrMeters.length; pos++) {
            clcCoordinates = mdlDistance.incrementMetersCoordinates(meters);
            let lstStores  = await mdlApiStores.requestStoresList(clcCoordinates);
            let objStore   = lstStores.find(store => store.store_id == process.env.ID_STORE_FOODOLOGY);
            if (objStore) {
                console.log(`La tienda con ID: ${process.env.ID_STORE_FOODOLOGY} 
                es visible a ${meters} metros de la cocina`);
            }
        });
    }
}


module.exports = {
    defineNearbyStores: defineNearbyStores
}



