import { LOGIN_ROUTE, REGISTRATION_ROUTE, GAME_ROUTE } from "./utils/constants";
import Auth from "./pages/Auth";
import Game from "./pages/Game";


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Auth />
  },

  {
    path: REGISTRATION_ROUTE,
    element: <Auth />
  },

  {
    path: GAME_ROUTE,
    element: <Game />
  },
];