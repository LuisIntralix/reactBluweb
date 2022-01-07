import React from 'react';
import PropTypes from 'prop-types';

const Prueba = ({id,name}) => {
    return (
        <div>
                <h1>{id} - {name}</h1>
        </div>
    );
};

Prueba.propTypes = {
    id : 'Id de la propiedad',
    name : 'Nombre de la propiedad'
};

export default Prueba;
