import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'
import Listas from './Listas'
import Oculto from './Oculto'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
}))

const Navbar = () => {

    const classes = useStyles()

    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>

                    <IconButton color='inherit' aria-label="MenuIcon" className={classes.menuButton}>
                        <MenuIcon></MenuIcon>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Reportes Gerenciales
                    </Typography>
                    <Button variant="text" color="inherit">
                        Login
                    </Button>



                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
            <Listas />
            <Oculto/>
        </div>
    )
}

export default Navbar
