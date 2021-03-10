class MapDistanceCalculation { 
  private deg2rad(value: number): number { 
    return value * (Math.PI/180) 
  }
  public distanceKm(lat1: number,lng1: number,lat2: number,lng2: number): number { 
    const totalRad = Math.sin(this.deg2rad(lat2-lat1)/2) * Math.sin(this.deg2rad(lat2-lat1)/2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(this.deg2rad(lng2-lng1)/2) * Math.sin(this.deg2rad(lng2-lng1)/2); 
    return 6371 * (2 * Math.atan2(Math.sqrt(totalRad), Math.sqrt(1-totalRad))); 
  }
}

export default MapDistanceCalculation;