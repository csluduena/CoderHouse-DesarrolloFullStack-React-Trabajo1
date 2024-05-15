import { useState } from 'react';
import './css/style.css'
import Header from './componentes/header/Header'
import SlideM from './componentes/main/SlideM'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/footer/Footer'

// App.jsx
function App() {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (price) => {
        setCartCount(prevCount => prevCount + 1);
        setTotalPrice(prevTotal => {
            const newTotal = prevTotal + price;
            console.log(`Has agregado un producto al carrito. Total parcial: $${newTotal}`);
            return newTotal;
        });
    };

    return (
        <>
            <Header cartCount={cartCount} totalPrice={totalPrice} />
            <SlideM />
            <ItemListContainer addToCart={addToCart} />
            <Footer />
        </>
    )
}

export default App;

