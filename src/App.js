import React from 'react';
import {Grommet} from 'grommet';
import Game from "./Game";
import './App.css';
const theme = {
  global: {
    font: {
      family: 'Solway'
    }
  },
};

function App() {

  return (
    <Grommet theme={theme} full>
     <Game startDate={'1800-01-01'} endDate={'2199-12-31'}/>
    </Grommet>
  );
}

export default App;
