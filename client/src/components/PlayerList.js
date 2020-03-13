import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

// Stateful class component; axios call and map to PlayerCard
class PlayerList extends React.Component {
  // Initial state (without constructor)
  state = {
    playerData: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        //   console.log(res.data)
        this.setState({
          playerData: res.data
        });
      })
      .catch(err => console.error);
  }
  render() {
    console.log("Rendering");
    return (
      <>
        {this.state.playerData.map((player, key) => {
          return <PlayerCard key={key} playerData={player} />;
        })}
      </>
    );
  }
}

export default PlayerList;
