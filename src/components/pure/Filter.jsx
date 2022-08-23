import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({ active, onClick, children }) => {
    
    // Si está activo, devuelve un span con el children:
    if (active) {
        return(<span className='active'>{children}</span>)
    }
    
    return (
        <button 
            className='filter'
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};
// node significa que es un elemento del DOM


export default Filter;
