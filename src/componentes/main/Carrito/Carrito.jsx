import PropTypes from 'prop-types';

const Carrito = ({ cartCount, totalPrice }) => {
    return (
        <>
            <div className="carritoPlace">
                <div className="carrito"></div>
                <div className="carritoContador">{cartCount}</div>
                <div className="carritoParcial">U$D: {totalPrice}</div>
            </div>
        </>
    )
}

Carrito.propTypes = {
    cartCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default Carrito;

