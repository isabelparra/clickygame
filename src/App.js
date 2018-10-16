import React, { Component } from 'react';
import BoatCard from "./components/BoatCard";
import Wrapper from "./components/Wrapper";
import boats from './boats.json';
import './App.css';

class App extends Component {
  state = {
    boats
  };

  removeBoat = id => {
    const boats = this.state.boats.filter(boat => boat.id !== id);
    this.setState({ boats });
    };

  render() {
  return (
  <Wrapper>
    <h1 className="title">Boat List</h1>
    {this.state.boats.map(boat => (
      <BoatCard
        removeBoat={this.removeBoat}
        id={boat.id}
        key={boat.id}
        name={boat.name}
        image={boat.image}
        activity={boat.activity}
        capacity={boat.capacity}
      />
      ))}
      </Wrapper>
    )
    }
  }


export default App;
