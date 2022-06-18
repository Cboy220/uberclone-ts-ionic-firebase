import React from "react";
//scss
import './Map.scss';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});



interface MapsProps {
    name: string;

  }
  
  const Maps: React.FC<MapsProps> = ({ name }) => {
    return (
      <div className="container__map">
        <strong>{name}</strong>
      </div>
    );
  };
  
  export default Maps;
  