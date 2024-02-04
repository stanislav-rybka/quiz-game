import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes";
import { GAME_ROUTE } from "../utils/constants";


const AppRouter = () => {
  return (
    <Routes>
      {/* Generating all public routes */}
      
      {publicRoutes.map(({ path, element }) => 

        <Route key={path} path={path} element={element} />

      )}

      {/* Route which redirects to "Game" page in case URL is not found */}
      
      <Route path="*" element={<Navigate to={GAME_ROUTE} />} />

    </Routes>
  );
}


export default AppRouter;