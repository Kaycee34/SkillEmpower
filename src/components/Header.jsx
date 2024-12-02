import { useMediaQuery } from 'react-responsive'; // Make sure to import this correctly
import MobileNavbar from "./MobileNavbar";
import NavbarDesktop from './DesktopNavbar';

const Header = () => {
    // Correct the useMediaQuery hook and use the proper query string
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <nav className="bg-gray-200 w-full font-poppins sticky top-0 z-50 shadow-md">
            {isDesktop ? <NavbarDesktop /> : <MobileNavbar />}
        </nav>
    );
};

export default Header;
