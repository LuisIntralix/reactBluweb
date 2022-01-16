import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MyTheme from '../styles/temaConfig'
import { ThemeProvider } from '@mui/material/styles';

/*ICONOS */
import domainPic from '../public/images/logo.png'

import GridViewIcon from '@mui/icons-material/GridView';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const drawerWidth = 240;

Menu.defaultProps = {
    title: 'Mi titulo por defecto',
}

export default function Menu({ children, title }) {

    /*Aquí se construye el menú de la aplicación*/
    const Menus = [
        { id: 1, texto: 'Inicio', icono: (<GridViewIcon />), ruta: '/inicio' },
        { id: 2, texto: 'Cargas', icono: (<ArrowUpwardIcon />), ruta: '/cargas' },
        { id: 3, texto: 'Descargas', icono: (<ArrowDownwardIcon />), ruta: '/descargas' },
        { id: 4, texto: 'Rendimiento', icono: (<SpeedIcon />), ruta: '/rendimiento' },
        { id: 5, texto: 'Inventario', icono: (<LocalGasStationIcon />), ruta: '/inventario' },
        { id: 6, texto: 'Flotilla', icono: (<DirectionsCarIcon />), ruta: '/flotilla' },
        { id: 7, texto: 'Zonas', icono: (<GpsFixedIcon />), ruta: '/zonas' },
        { id: 8, texto: 'Perfil', icono: (<ManageAccountsIcon />), ruta: '/perfil' },
    ]
    /******/

    /*Aquí va el apartado del tiempo*/
    const [fechaAnalisis, setfechaAnalisis] = React.useState(' 07/01/2022-00:00:00 - 14/01/2022-13:17:52 (GMT-6)')
    /******/

    const [listaMenu, setlistaMenu] = React.useState(Menus)


    const theme = useTheme();


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <ThemeProvider theme={MyTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >
                            {title}
                        </Typography>
                        <AccessTimeIcon /> {fechaAnalisis}
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}  >
                    <DrawerHeader >

                        <Image src={domainPic} />

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List >
                        {
                            /* Mapeo automático de menús */
                            listaMenu.map((item) => (
                                <Link href={item.ruta} key={item.id}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            {item.icono}
                                        </ListItemIcon>
                                        <ListItemText primary={item.texto} />
                                    </ListItem>
                                </Link>
                            ))
                            /****************************/
                        }
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3}} >
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>

        </ThemeProvider>


    );
}






const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);