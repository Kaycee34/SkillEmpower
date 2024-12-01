import { useMediaQuery } from 'react-responsive'; // Make sure to import this correctly
import MobileNavbar from "./MobileNavbar";
import NavbarDesktop from './DesktopNavbar';

const Header = () => {
    // Correct the useMediaQuery hook and use the proper query string
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <nav className="bg-gray-200 w-full h-full font-poppins">
            {/* Conditionally render components based on screen size */}
            {isDesktop ? <NavbarDesktop /> : <MobileNavbar />}
        </nav>
    );
};

export default Header;
