import { useState } from 'react';
import PropTypes from 'prop-types';

const GuitarSection = ({ id, title, description, guitarImage, price, onAddToCart }) => {
    const descriptionParagraphs = description.split('\n').map((line, index) => (
        <p key={index} style={{ textAlign: 'center', fontSize: '18px' }}>{line}</p>
    ));

    const handleAddToCartClick = () => {
        onAddToCart();
    };

    return (
        <section id={id} style={{ color: 'white', backgroundColor: '#000000', padding: '20px', marginTop: '5%' }}>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            {descriptionParagraphs}
            <img className="guitar-image" src={guitarImage} alt={title} />
            <p style={{ textAlign: 'center', fontSize: '24px' }}>Price: ${price}</p>
            <button onClick={handleAddToCartClick} style={{ display: 'block', margin: '0 auto', padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>Agregar al Carrito</button>
        </section>
    );
};

GuitarSection.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guitarImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

const ItemListContainer = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Primera instancia de GuitarSection */}
                <GuitarSection
                    id="sg-model"
                    title="Gibson SG Standard 2016 T"
                    description={`The Gibson SG was born in 1961 and since then it has become\n\n a staple throughout the world of popular music. Its double cutaway means that\n\n access to the highest frets is easy and its thinner body means that it’s lighter\n\n too (compared to a Les Paul). The Gibson SG Standard 2016 T\n\n is a nod back to the SGs of the 60s and we,  here at Reidys, really like it.`}
                    guitarImage="/src/assets/img/GibsonSGStandard2016T.png"
                    price={1457}
                    onAddToCart={handleAddToCart}
                />

                {/* Segunda instancia de GuitarSection */}
                <GuitarSection
                    id="sg-model-2"
                    title="Gibson SG Faded 2016 T"
                    description={`The Gibson SG Faded 2016 T offers you the classic double \n\n cutaway guitar at an amazing price. It’s a guitar that boasts incredible construction, great\n\n  tone and fantastic playability. With a classic look and classic sound, you can join \n\nthe likes of Angus Young, Tony Iommi, Pete Townshend, Kelly Jones, \n\nDerek Trucks and more, at a more affordable price than ever.`}
                    guitarImage="/src/assets/img/GibsonSGFaded2016T.png"
                    price={1196}
                    onAddToCart={handleAddToCart}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Primera instancia de GuitarSection */}
                <GuitarSection
                    id="les-paul-model"
                    title="Gibson Les Paul 50s Tribute 2016 T"
                    description={`Old school look and sound at an amazing price point.\n\n The Gibson Les Paul 50s Tribute 2016 T does what it says on the\n\n tin – it gives you a modern remake of a 50s style \n\nLes Paul – classic looks, tones and feel. I’m a huge fan\n\n of the old Les Pauls so I’m really glad to see this guitar make\n\n it into the 2016 Gibson electric guitar range.`}
                    guitarImage="/src/assets/img/GibsonLesPaul50sTribute2016T.png"
                    price={1062}
                    onAddToCart={handleAddToCart}
                />

                {/* Segunda instancia de GuitarSection */}
                <GuitarSection
                    id="les-paul-model-2"
                    title="Gibson Les Paul Studio 2016 T"
                    description={`The Gibson Les Paul Studio made its way into production in the early 80s.\n\n It missed out on some of the aesthetic features to keep cost down but it \n\nstill sounded and played like a Les Paul should have done. Now, it’s an incredibly popular \n\nmodel and no wonder – they sound fantastic and though they’re a little bit\n\n thinner and don’t look quite as flash\n\n as some of the more expensive Les Pauls, they’re still certainly eye-catching.`}
                    guitarImage="/src/assets/img/GibsonLesPaulStudio2016T.png"
                    price={1399}
                    onAddToCart={handleAddToCart}
                />

                {/* Tercera instancia de GuitarSection */}
                <GuitarSection
                    id="les-paul-model-3"
                    title="Gibson Les Paul Traditional 2016 T"
                    description={`Are you inspired by the likes of Jimmy Page, Billy Gibbons, Joe Perry or Keith Richards? \n\nThe Gibson Les Paul has been played on countless classic\n\n songs and albums over the last six decades or so, especially within rock and blues. \n\nThe Gibson 2016 Les Paul Traditional T captures the essence of those early \n\noriginal Les Pauls played by our heroes with a spec that’s pretty close\n\n to those incredibly hallowed and sought after guitars.`}
                    guitarImage="/src/assets/img/GibsonLesPaulTraditional2016T.png"
                    price={1932}
                    onAddToCart={handleAddToCart}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Primera instancia de GuitarSection */}
                <GuitarSection
                    id="stratocaster-model"
                    title="Fender Stratocaster - Sunburst PF"
                    description={`The good, old standard series is getting up in the years so it's\n\n time for something new! The Player Stratocaster PF 3TS made in Mexico is a \n\nworthy successor - this model offers everything you can expect from a good Strat:\n\n solid alder body, one-piece maple neck, a set of Alnico 5 single coils,\n\n modern, playable neck, 2 point tremolo With curved steel\n\n riders and above-average workmanship, this guitar is a real all-round workhorse.`}
                    guitarImage="/src/assets/img/PlayerStrat3-ColourSunburstPF.png"
                    price={799}
                    onAddToCart={handleAddToCart}
                />

                {/* Segunda instancia de GuitarSection */}
                <GuitarSection
                    id="stratocaster-model-1"
                    title="Fender Stratocaster - American Performer Strat Honey Burst RW"
                    description={`Fender's long-established tonewood combinations\n\n remain intact with the American Performer Strat.\n\n Featuring an Alder body, this \n\npopular material ensures balanced lows, lively\n\n mids and a crisp top-end, serving as the perfect\n\n tonal foundation for the bright-sounding single-coils.`}
                    guitarImage="/src/assets/img/fender-american-BurstRW.png"
                    price={1539}
                    onAddToCart={handleAddToCart}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Primera instancia de GuitarSection */}
                <GuitarSection
                    id="flying-v-model"
                    title="Flying V - ESP LTD KH-V RDSP KIRK HAMMETT"
                    description={`Kirk Hammett Signature Series electric\n\n guitar with korina body and EMG Bone\n\n Breaker Signature Kirk Hammett pickups.\n\n Color: Red sparkle. Includes case.`}
                    guitarImage="/src/assets/img/esp-ltd-kh-v-rdsp-kirk-hammett-red-sparkle.png"
                    price={1698}
                    onAddToCart={handleAddToCart}
                />

                {/* Segunda instancia de GuitarSection */}
                <GuitarSection
                    id="flying-v-model-2"
                    title="Flying V - ESP LTD Alexi Hexed"
                    description={`Capturing the essence of one of the world's \n\nmost beloved and influential figures in metal music,\n\n the ESP LTD Alexi Hexed is among the final guitars designed\n\n by Children of Bodom/Bodom After Midnight frontman Alexi Laiho.`}
                    guitarImage="/src/assets/img/ESP-LTD-Alexi-Hexed.png"
                    price={1799}
                    onAddToCart={handleAddToCart}
                />
            </div>
            <CarritoImg cartCount={cartCount} />
        </div>
    );
};

const CarritoImg = ({ cartCount }) => {
    return (
        <div className="carritoPlace">
            <div className="carritoIMG">
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
        </div>
    );
};

CarritoImg.propTypes = {
    cartCount: PropTypes.number.isRequired,
};

export default ItemListContainer;