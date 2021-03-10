import MapDistanceCalculation from './lib/distanceCalculation'
const mapDistanceCalculation = new MapDistanceCalculation();

//37.566667885892244, 126.97841615257506 -> 35.179781243322715, 129.07501478015467
//서울시청 -> 부산시청 까지의 거리 
console.log(mapDistanceCalculation.distanceKm(37.566667885892244, 126.97841615257506 , 35.179781243322715, 129.07501478015467))