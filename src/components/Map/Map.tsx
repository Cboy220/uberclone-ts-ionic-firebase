import React from "react";
//scss
import './Map.scss';
import { useEffect } from "react";

const mapboxgl = require('mapbox-gl');


mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g';




interface MapsProps {
    name: string;

  }
  
  const Maps: React.FC<MapsProps> = ({ name }) => {
   /**
    *  let map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      
    });
    */

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [26.8206, 30.8025],
        zoom: 3,
      })
    
   
      });


    return (
      <div className="container__map" id="map">
        <strong>{name}</strong>
      </div>
    );
  };
  
  export default Maps;
  