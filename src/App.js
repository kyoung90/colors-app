import React from "react";
import { Palette } from "./Palette.js";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>}></Route>
        <Route
          exact
          path="/palette/:id"
          render={() => <Palette palette={generatePalette(seedColors[4])} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
