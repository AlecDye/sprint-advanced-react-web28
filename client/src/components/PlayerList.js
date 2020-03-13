import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

// Stateful class component; axios call and map to PlayerCard
class PlayerList extends React.Component {
  // Initial state (without constructor)
  state = {
    playerData: []
  };
  // Axios call, setting response to state, updating state
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
    // 1st render is empty
    // 2nd render maps updated state to PlayerCard component
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
