const NavBar = () => {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navBar">
            <ul className="menuList">
                <li className="sgBtn" onClick={() => handleClick('sg-model')}>SG Model</li>
                <li className="lpBtn" onClick={() => handleClick('les-paul-model')}>Les Paul Model</li>
                <li className="stBtn" onClick={() => handleClick('stratocaster-model')}>Stratocaster Model</li>
                <li className="fvBtn" onClick={() => handleClick('flying-v-model')}>Flying V Model</li>
            </ul>
        </div>
    );
};

export default NavBar;
