import PropTypes from 'prop-types';
import './ItemListCart.css';

const ItemListCart = ({ greeting }) => {
    return (
        <div className="item-list-cart">
            <ul>
                {greeting.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

ItemListCart.propTypes = {
    greeting: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemListCart;