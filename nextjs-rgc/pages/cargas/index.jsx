import Menu from '../../components/Menu'
import LitrosTotales from '../../components/LitrosTotales'
import Contenedor from '../../components/Contenedor'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function index() {
    return (
        <Menu title="Cargas">
            <LitrosTotales text="0 litros cargados" mycolor='#008000' />

            <ButtonGroup variant="outlined" aria-label="outlined secondary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <Contenedor>
                <h3>Contenedor de datos!</h3>
            </Contenedor>

            <Contenedor>
                <h3>Contenedor de datos!</h3>
            </Contenedor>

            <Contenedor>
                <h3>Contenedor de datos!</h3>
            </Contenedor>

        </Menu>
    )
}
