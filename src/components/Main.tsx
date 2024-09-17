import { Route, Routes, useLocation } from 'react-router-dom'
import { navItems, characters } from '../utils/constants'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import StarWars from './StarWars'
import ErrorPage from './ErrorPage'

const Main = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPath = pathSegments[0];
  const heroId = pathSegments[1];

  const isValidRoute = navItems.some(item => item.path === currentPath) || currentPath === '';
  const isValidHero = !heroId || characters.hasOwnProperty(heroId);

  if (!isValidRoute || !isValidHero) {
    return <ErrorPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:heroId" element={<Home />} />
      <Route path="/about_me" element={<AboutMe heroId={heroId} />} />
      <Route path="/about_me/:heroId" element={<AboutMe heroId={heroId} />} />
      <Route path="/star_wars" element={<StarWars />} />
      <Route path="/star_wars/:heroId" element={<StarWars />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:heroId" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Main