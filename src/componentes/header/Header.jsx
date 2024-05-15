import NavBar from './NavBar'
import TituloYBackground from './TituloYBackground'

const Header = () => {
    return (
        <>
            <div>
                <NavBar /> {/*acá citamos al componente NavBar*/}
            </div>
            <TituloYBackground />

        </>
    )
}

export default Header