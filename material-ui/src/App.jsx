
import Global from './components/Global'
import Botones from './components/Botones'
import Estilos from './components/Estilos'
import Iconos from './components/Iconos'
import Tipografia from './components/Tipografia'
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaConfig'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Navbar/>
        {/*<Botones />
      <hr />
      <Iconos />
      <hr />
      <Tipografia></Tipografia>
      <hr />
      <Estilos/>*/}

        <Global />

      </ThemeProvider>

    </div>
  )
}

export default App
