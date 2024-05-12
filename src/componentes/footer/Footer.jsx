//! rafce


import { useState, useEffect } from 'react';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Establecer la visibilidad de la página en "oculto" al cargar
        document.body.style.visibility = 'hidden';

        // Función para manejar el evento de scroll
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Agregar el listener de scroll al montar el componente
        window.addEventListener('scroll', handleScroll);

        // Eliminar el listener de scroll al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Función para llevar la página arriba al cargar o recargar
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        // Llamar a scrollToTop cuando se carga el componente
        scrollToTop();

        // Establecer la visibilidad de la página en "visible" una vez que la página esté lista
        document.body.style.visibility = 'visible';

        // Agregar el evento onbeforeunload para desplazar la página hacia arriba antes de recargar o cerrar la página
        window.onbeforeunload = scrollToTop;
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="footer">
            {showButton && (
                <button className="scroll-top-button" onClick={scrollToTop}>
                    Back To Top
                </button>
            )}
        </div>
    );
};

export default Footer;