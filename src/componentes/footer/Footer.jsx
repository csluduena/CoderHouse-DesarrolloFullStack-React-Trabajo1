//! rafce


import { useState, useEffect } from 'react';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        document.body.style.visibility = 'hidden';

        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        scrollToTop();

        document.body.style.visibility = 'visible';

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