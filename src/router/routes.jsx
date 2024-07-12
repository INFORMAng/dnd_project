import About from "../pages/About";
import Character from "../pages/Character";
import Characters from "../pages/Characters";

export const routes = [
  {path: '/about', component: About, exact: true},
  {path: '/characters', component: Characters, exact: true},
  {path: '/character/1', component: Character, exact: true},
]


const characters = {
  chatacter: {
    hp: "",
    
  }
}