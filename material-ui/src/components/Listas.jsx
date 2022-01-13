import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DeckIcon from '@mui/icons-material/Deck';

const Listas = () => {
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">

                <ListItemButton>
                    <ListItemIcon>
                        <CloudQueueIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi primer elemento' />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <DeckIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi segundo elemento' />
                </ListItemButton>

                <Divider/>

            </List>
        </div>
    )
}

export default Listas
