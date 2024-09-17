import { useContext } from "react"
import { useLocation } from "react-router-dom"
import Navigation from "./Navigation"
import { SWContext } from "../utils/context"
import { characters, navItems } from "../utils/constants";

const Header = () => {
    const { hero } = useContext(SWContext);
    const location = useLocation();

    const currentPath = location.pathname.split('/')[1];
    const heroId = location.pathname.split('/')[2];

    const isValidRoute = navItems.some(item => item.path === currentPath);
    const isValidHero = heroId ? characters.hasOwnProperty(heroId) : true;

    const headerText = isValidRoute && isValidHero ? characters[hero].name : "Error";

    return (
        <header className="bg-grey-color rounded-t-3xl">
            <Navigation />
            <h1 className="text-center py-4 text-6xl">{headerText}</h1>
        </header>
    )
}

export default Header