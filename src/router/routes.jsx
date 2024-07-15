import About from "../pages/About";
import CharacterPage from "../pages/CharacterPage";
import Characters from "../pages/Characters";

export const routes = [
  {path: '/about', component: About, exact: true},
  {path: '/characters', component: Characters, exact: true},
  {path: '/character/1', component: CharacterPage, exact: true},
]

