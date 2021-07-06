import React from "react";

// Stateless function; pass in props to render
function PlayerCard(props) {
  //   console.log("PlayerCard", props);
  return (
    <div className="player-card">
      <h3>{props.playerData.name}</h3>
      <p>{props.playerData.country}</p>
      <p>Google Searches: {props.playerData.searches}</p>
    </div>
  );
}

export default PlayerCard;
