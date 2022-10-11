import "./Card.css";
import React from "react";

const Card = ({ data }) => {
  return (
    
    <div
            
            className="container"
          >
        {data.map((place) => {
        const { id, title, desc, image } = place;
        return (
          
            
            <div key={id} className="card">
              <h2>{title}</h2>
              <img
                src={image}
                alt="resim"
              />
              <p>{desc}</p>
            </div>
          
        );
      })}
   </div>
  );
};

export default Card;
