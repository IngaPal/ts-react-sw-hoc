import { useContext } from 'react';
import { characters } from '../utils/constants';
import { SWContext } from '../utils/context';

const Hero = () => {
    const {hero} = useContext(SWContext);
    return (
        <section className="float-left w-1/4 mr-4">
            <img className="w-full shadow-hero" src={characters[hero].img} alt="Hero" />
        </section>
    )
}

export default Hero