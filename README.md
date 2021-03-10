# MapDistanceCalculation
위도 경도 기준으로 직선거리의 두 지역의 거리를 알려줍니다.

### API
```
mapDistanceCalculation.distanceKm(기준이 되는 위도, 기준이 되는 경도, 비교 지역 위도, 비교 지역 경도)
```
결과는 Km로 리턴합니다.

### Sample
```
import MapDistanceCalculation from './lib/distanceCalculation'
const mapDistanceCalculation = new MapDistanceCalculation();

//37.566667885892244, 126.97841615257506 -> 35.179781243322715, 129.07501478015467
//서울시청 -> 부산시청 까지의 거리 
console.log(mapDistanceCalculation.distanceKm(37.566667885892244, 126.97841615257506 , 35.179781243322715, 129.07501478015467))

```
🌟 결과
```
> 325.0580463768051
```