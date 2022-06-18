import React from "react";
//scss
import './Map.scss';



interface MapsProps {
    name: string;

  }
  
  const Maps: React.FC<MapsProps> = ({ name }) => {
    return (
      <div className="container">
        <strong>{name}</strong>
      </div>
    );
  };
  
  export default Maps;
  