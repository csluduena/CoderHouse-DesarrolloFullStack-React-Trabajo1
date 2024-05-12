// Carrito.js
import PropTypes from 'prop-types';

const Carrito = ({ cartCount }) => {
    return (
        <>
            <div className="carritoPlace">
                <div className="carrito"></div>
                <div className="carritoContador">{cartCount}</div>
            </div>
        </>
    )
}

Carrito.propTypes = {
    cartCount: PropTypes.number.isRequired,
};

export default Carrito;