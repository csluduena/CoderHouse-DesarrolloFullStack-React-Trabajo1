import NavBar from './NavBar'
import TituloYBackground from './TituloYBackground'
import Carrito from '../main/Carrito/Carrito'

const Header = () => {
    return (
        <>
            <div>
                <NavBar /> {/*acá citamos al componente NavBar*/}
            </div>
            <Carrito />
            <TituloYBackground />
            
        </>
    )
}

export default Header