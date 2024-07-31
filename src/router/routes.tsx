import About from "../pages/About";
import CharacterPage from "../pages/CharacterPage";
import Characters from "../pages/Characters";

interface IRoute { path: string; component: React.FC;}

export const routes:IRoute[] = [
  {path: '/about', component: About},
  {path: '/characters', component: Characters},
  {path: '/characters/:id', component: CharacterPage},
]

