import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ItemListCart.css'

const ItemListCart = ({ messages }) => {
    const itemListCartRef = useRef(null);

    useEffect(() => {
        if (itemListCartRef.current) {
            itemListCartRef.current.style.height = `${messages.length * 30}px`;
        }
    }, [messages]);

    return (
        <div className="item-list-cart" style={{ position: 'fixed', bottom: '103px', right: '43px', height: 'auto', color: 'white', marginBottom: '0%', cursor: 'pointer', backgroundColor: '#4b0505', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} ref={itemListCartRef}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {messages.map((message, index) => (
                    <li key={index} style={{ marginBottom: '5px', fontSize: '16px' }}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

ItemListCart.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemListCart;