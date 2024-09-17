import { withErrorPage } from '../hoc/withErrorPage';
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

interface HomeProps {
    heroId: string;
}

const Home = ({ heroId }: HomeProps) => {
return (
    <main>
        <Hero />
        <DreamTeam />
        <FarGalaxy />
    </main> 
)
}

export default withErrorPage(Home);