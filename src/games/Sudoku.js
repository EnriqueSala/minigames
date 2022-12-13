import React from 'react'
import { Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
const ROWS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const COLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Sudoku app 
const Sudoku = () => {
  return (
<div>
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Grid>
        <div><h1>Sudoku solver and generator</h1></div>
      </Grid>

      <Grid>

        {/* Creates the sudoku board */}
        <div id='sudoku'>
          {
            ROWS.map((row) => {
              return <div key={`row${row}`} id={`row${row}`}>
                {COLS.map((col) => {
                  if (
                    ((row === 0 || row === 1 || row === 2) && (col < 3 || col > 5)) ||
                    ((row === 6 || row === 7 || row === 8) && (col < 3 || col > 5)) ||
                    ((row % 9 === 3 || row % 9 === 4 || row % 9 === 5) && (col > 2 && col < 6))

                  ) {
                    return <input key={`${col} ${row}`} id={`${col} ${row}`} type='number' min={1} max={9} className='odd-section'></input>
                  } else {
                    return <input key={`${col} ${row}`} id={`${col} ${row}`} type='number' min={1} max={9}></input>
                  }


                })}
              </div>;

            })}
        </div>
        </Grid>
        </Grid>

        {/* Sudoku options */}
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Button variant="contained">Solve</Button>
        <Button variant="contained">Validate</Button>
        
          <FormControl sx={{m:1,minWidth:100}}>
          <InputLabel id='difficulty-label'>Difficulty</InputLabel>
          <Select
          labelId='difficulty-label'
          label='Difficulty'
          >
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'hard'}>Hard</MenuItem>
            <MenuItem value={'random'}>Random</MenuItem>
          </Select>
          </FormControl>
          
          

        <Button variant="contained">Generate</Button>
        <Button variant="contained">Clear</Button>
        
        </Grid>
        
        </div>
  )
}

export default Sudoku;