import React, { useState } from "react";

function SnakeFood ({position}) {

  const {snakeFood} = position
  const style={
    left:`${snakeFood[0]}%`,
    top:`${snakeFood[1]}%`
  }
    return (
        <div className="snake-food" style={style}>
            
        </div>
    );
}

export default SnakeFood;