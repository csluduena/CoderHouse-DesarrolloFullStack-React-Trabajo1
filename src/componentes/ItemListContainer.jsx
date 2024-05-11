import PropTypes from 'prop-types';

const GuitarSection = ({ id, title, description, /*extraDescription,*/ guitarImage, price }) => {

    const descriptionParagraphs = description.split('\n').map((line, index) => (
        <p key={index} style={{ textAlign: 'center', fontSize: '18px' }}>{line}</p>
    ));

    return (
        <section id={id} style={{ color: 'white', backgroundColor: '#000000', padding: '20px', marginTop: '5%' }}>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            {/* Renderizar los párrafos de la descripción */}
            {descriptionParagraphs}
            {/* <p style={{ textAlign: 'center', fontSize: '24px' }}>{extraDescription}</p> */}
            <img className="guitar-image" src={guitarImage} alt={title} />
            <p style={{ textAlign: 'center', fontSize: '24px' }}>Price: ${price}</p>
            <button style={{ display: 'block', margin: '0 auto', padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>Agregar al Carrito</button>
        </section>
    );
};

GuitarSection.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // extraDescription: PropTypes.string.isRequired,
    guitarImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

const ItemListContainer = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {/* Primera instancia de GuitarSection */}
            <GuitarSection
                id="sg-model"
                title="Gibson SG Standard 2016 T"
                description={`The Gibson SG was born in 1961 and since then it has become\n\n a staple throughout the world of popular music. Its double cutaway means that\n\n access to the highest frets is easy and its thinner body means that it’s lighter\n\n too (compared to a Les Paul). The Gibson SG Standard 2016 T\n\n is a nod back to the SGs of the 60s and we,  here at Reidys, really like it.`}
                guitarImage="/src/assets/img/GibsonSGStandard2016T.png"
                price={999}
            />

            {/* Segunda instancia de GuitarSection */}
            <GuitarSection
                id="sg-model-2"
                title="Otro Modelo de SG"
                description={`The Gibson SG was born in 1961 and since then it has become\n\n a staple throughout the world of popular music. Its double cutaway means that\n\n access to the highest frets is easy and its thinner body means that it’s lighter\n\n too (compared to a Les Paul). The Gibson SG Standard 2016 T\n\n is a nod back to the SGs of the 60s and we,  here at Reidys, really like it.`}
                guitarImage="/src/assets/img/GibsonSGStandard2016T.png"
                price={1099}
            />
        </div>
            <GuitarSection
                id="les-paul-model"
                title="Les Paul Model"
                description={`La Gibson SG es una guitarra icónica que ha sido utilizada por numerosos músicos en una variedad de géneros musicales. Este modelo ofrece un sonido distintivo y un diseño elegante, perfecto para cualquier estilo de música.`}
                guitarImage="/src/assets/img/otro-modelo-sg.png"
                price={1299}
            />
            <GuitarSection
                id="stratocaster-model"
                title="Stratocaster Model"
                description="La Fender Stratocaster es una guitarra versátil y popular que ha sido utilizada por numerosos músicos en una amplia gama de estilos musicales."
                extraDescription="Descripción adicional: Esta guitarra es conocida por su distintivo sonido de una sola bobina."
                guitarImage="/src/assets/img/stratocaster-guitar.jpg"
                price={899}
            />
            <GuitarSection
                id="flying-v-model"
                title="Flying V Model"
                description="La Gibson Flying V es una guitarra eléctrica de aspecto único y agresivo que se ha utilizado en géneros como el rock y el heavy metal."
                extraDescription="Descripción adicional: Esta guitarra es perfecta para los amantes del metal."
                guitarImage="/src/assets/img/flying-v-guitar.jpg"
                price={1099}
            />
        </div>
    );
};

export default ItemListContainer;

