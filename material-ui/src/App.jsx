
import './App.css'
import {Button} from '@mui/material'
import { styled } from '@mui/material/styles';
function App() {

  return (
    <div className="App">
      <Button color="primary">
        Primary
      </Button>
      <p>Lorem</p>
      <Button color="primary" variant='contained'>
        Color
      </Button>
      <p>Lorem</p>
      <Button color="primary" variant='contained' disableElevation
       href='https://www.google.com/'>
        disable Elevation
      </Button>
      <p>Lorem</p>
      <Button color="primary" variant='contained' 
       fullWidth>
        fullWIdth
      </Button>
    </div>
  )
}

export default App
