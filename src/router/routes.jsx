import About from "../pages/About";
import CharacterPage from "../pages/CharacterPage";
import Characters from "../pages/Characters";

export const routes = [
  {path: '/about', component: About, exact: true},
  {path: '/characters', component: Characters, exact: true},
  {path: '/characters/:id', component: CharacterPage, exact: true},
]

