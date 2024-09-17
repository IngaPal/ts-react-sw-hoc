import { withErrorPage } from '../hoc/withErrorPage';
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

interface HomeProps {
    heroId: string;
}

const Home: React.FC<HomeProps> = () => {
return (
    <main>
        <Hero />
        <DreamTeam />
        <FarGalaxy />
    </main> 
)
}

export default withErrorPage(Home);