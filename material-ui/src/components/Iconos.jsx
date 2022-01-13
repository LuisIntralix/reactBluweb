import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBox from '@mui/icons-material/AccountBox';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const Iconos = () => {
    return (
        <div>
            <DeleteIcon color='secondary' />
            <Button
                variant="text"
                color="primary"
                startIcon={<AccountBox></AccountBox>}
                endIcon={<Add></Add>}
            >
                Eliminar
            </Button>
            <IconButton aria-label="AccountBox" >
                <AccountBox></AccountBox>
            </IconButton>
        </div>
    )
}

export default Iconos
