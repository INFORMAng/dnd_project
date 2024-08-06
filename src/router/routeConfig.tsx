import React from "react";
import About from "../pages/About";
import CharacterPage from "../pages/CharacterPage";
import Characters from "../pages/Characters";
import {Navigate, RouteProps} from "react-router-dom";

export enum AppRoutes {
  ABOUT = 'about',
  CHARACTERS = 'characters',
  CHARACTERS_DETAILS = 'characters_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CHARACTERS]: '/characters',
  [AppRoutes.CHARACTERS_DETAILS]: '/characters/', // + id
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />
  },
  [AppRoutes.CHARACTERS]: {
    path: RoutePath.characters,
    element: <Characters />
  },
  [AppRoutes.CHARACTERS_DETAILS]: {
    path: `${RoutePath.characters_details}:id`,
    element: <CharacterPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Navigate to={RoutePath.about} />
  }
}
