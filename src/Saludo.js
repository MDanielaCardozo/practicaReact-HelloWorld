import React, {Fragment} from 'react';

const Saludo = (props) => {
    return (
        <Fragment>
            <h2 className='display-1 text-primary'>Hello {props.contenido}</h2>
        </Fragment>
    );
};

export default Saludo;