import { Route } from "react-router-dom";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const App = () => (
    <div>
        <Route path="/" component={PokemonIndexContainer} />
        {/* <Route path="/" component={PokemonDetailContainer} /> */}
    </div>
)

export default App;