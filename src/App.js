import './App.css';
import { Grid } from '@mui/material';
import Sudoku from './games/Sudoku';
import TicTacToe from './games/TicTacToe';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid>
          <h1>Minigames</h1>
        </Grid>
      </Grid>
      <Grid item>
      <Router>
        <Routes>
          <Route path="/" element={<Sudoku/>} />
          <Route path='/TicTacToe' element={<TicTacToe/>}/>
        </Routes>
        
      </Router>
      </Grid>
    </div>
  );
}

export default App;
