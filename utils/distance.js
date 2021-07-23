require('dotenv').config();

/**
 * request Stores List
 * @author: https://reviblog.net/2016/01/08/javascript-obtener-la-distancia-distancia-en-kilometros-entre-dos-puntos-dadas-por-su-latitud-y-longitud/
*/
function calculateDistanceKM(lat1,lon1,lat2,lon2) {
    rad = function(x) {return x*Math.PI/180;}
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad( lat2 - lat1 );
    var dLong = rad( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d.toFixed(3);
}

/**
 * request Stores List
 * @author: https://stackoverflow.com/questions/7477003/calculating-new-longitude-latitude-from-old-n-meters
*/
function incrementMetersCoordinates(cntMeters) {
    const earth = 6378.137,  //radius of the earth in kilometer
    pi = Math.PI;
    cos = Math.cos;
    m  = (1 / ((2 * pi / 360) * earth)) / 1000;  //1 meter in degree
    const newLatitude  = process.env.KITCHEN_COORDINATE_LATITUDE + (cntMeters * m);
    const newLongitude = process.env.KITCHEN_COORDINATE_LONGITUDE + (cntMeters * m) / cos(process.env.KITCHEN_COORDINATE_LATITUDE * (pi / 180));
    return {newLatitude, newLongitude};
}

 module.exports = {
    calculateDistanceKM: calculateDistanceKM,
    incrementMetersCoordinates: incrementMetersCoordinates
}