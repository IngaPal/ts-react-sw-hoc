import { withErrorPage } from '../hoc/withErrorPage';
import { starWarsInfo } from '../utils/constants';

interface StarWarsProps {
  heroId: string;
}

const StarWars: React.FC<StarWarsProps> = () => {
  return (
    <div className="text-3xl leading-loose text-justify tracking-widest">{starWarsInfo}</div>
  )
}

export default withErrorPage(StarWars);