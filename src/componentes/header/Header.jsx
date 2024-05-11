import NavBar from './NavBar'
import TituloYBackground from './TituloYBackground'
import CarritoImg from './CarritoImg'

const Header = () => {
    return (
        <>
            <div>
                <NavBar /> {/*acá citamos al componente NavBar*/}
            </div>
            <CarritoImg />
            <TituloYBackground />
        </>
    )
}

export default Header