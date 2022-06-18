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


    useEffect(() => {
      const map = new mapboxgl.Map({
        //important id for the container insert into div
        container: "map",
        style: 'mapbox://styles/omarashzeinhom98/cl4k5xuzh002h14mtoho5qips?optimize=true',
        center: [26.8206, 30.8025],
        zoom: 3,
        
      })
    
   
      });


    return (
      <div className="container__map" /*important id for map container */id="map">
        <strong>{name}</strong>
      </div>
    );
  };
  
  export default Maps;
  