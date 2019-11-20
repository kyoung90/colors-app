import React from "react";
import { Palette } from "./Palette.js";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  const findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>}></Route>
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
