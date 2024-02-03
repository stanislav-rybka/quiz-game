import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/constants";


const AppRouter = () => {
  const isAuthorized = false;

  return (
    <Routes>
      {/* Generating all public routes */}
      
      {publicRoutes.map(({ path, element }) => 

        <Route key={path} path={path} element={element} />

      )}

      {/* Route which redirects to "Login" page in case URL is not found */}
      
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />

    </Routes>
  );
}


export default AppRouter;