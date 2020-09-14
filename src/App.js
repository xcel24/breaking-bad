import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import SearchBar from "./components/ui/SearchBar";
import axios from "axios";

class App extends Component {
  state = {
    items: [],
    isLoading: true,
    query: "",
  };

  async componentDidMount() {
    const { query } = this.state;
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    this.setState({
      items: res.data,
      isLoading: false,
    });
  }

  handleChange = async (q) => {
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${q}`
    );

    this.setState({
      items: res.data,
    });
  };

  render() {
    const { items, isLoading } = this.state;

    return (
      <div className="container">
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <CharacterGrid items={items} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
