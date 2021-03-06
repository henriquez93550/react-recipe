import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"

import Recipes from "./components/Recipes";


const API_KEY = "dcd1748f066a76a1ad549ea1dbc9cea3";


class App extends Component {
state = {
  recipes: []
}

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    // prevents default from refreshing page
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?
key=${API_KEY}&q=${recipeName}&count=10;`);

    const data = await api_call.json();
    // console.log(data.recipes[0].recipe_id);
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  // puts info on local storage
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    // recreates localStorage strings in to JSON
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  // keeps search results on page
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
