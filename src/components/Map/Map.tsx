import React from "react";
//scss
import "./Map.scss";
import { useEffect } from "react";

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1Ijoib21hcmFzaHplaW5ob205OCIsImEiOiJjbDRrMXY5c3MwN3ZpM2NxcHp3ZGVmN3ZyIn0.3Ziuh7Utama_wz_4s8qh2g";

//import passed map id
interface MapsProps {
  name: string;
  dropOffCoordinates: string;
  pickupCoordinates: string;
}

const Map: React.FC<MapsProps> = (props, { name }) => {
  //debug props
  // console.log(props);

  //initializes map
  useEffect(() => {
    const map = new mapboxgl.Map({
      //important id for the container insert into div
      container: "map",
      style:
        "mapbox://styles/omarashzeinhom98/cl4k5xuzh002h14mtoho5qips?optimize=true",
      center: [26.8206, 30.8025],
      zoom: 3,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }
    if (props.pickupCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.dropOffCoordinates, props.pickupCoordinates, {}], {
        padding: 50,
        zoom: 9
      });
    }
  }, [props.pickupCoordinates, props.dropOffCoordinates]);

  const addToMap = (map: any, coordinates: any) => {
    // Set marker options.
    const marker = new mapboxgl.Marker({
      color: "#568203",
      draggable: true,
    })
      .setLngLat(coordinates)
      .addTo(map);
  };

  // Pick Up & Drop Off Coordinates useEffect Displays props
  useEffect(() => {
    /*debug code */
    //console.log(props);
    //console.log(props.pickupCoordinates);
    //console.log(props.dropOffCoordinates);
  }, [props.pickupCoordinates, props.dropOffCoordinates]);

  //

  return (
    <div
      className="container__map" 
      /*important id for map container */ id="map"
      /** */ 
    >
      <strong>{name}</strong>
    </div>
  );
};

export default Map;
