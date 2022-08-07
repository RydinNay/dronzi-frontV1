import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userRoutes, publicRoutes, clientRoutes, adminRoutes } from "./routes";
import { observer } from "mobx-react-lite";
import userStore from "../store/UserStore";

const getRoutes = (routeArray) => {
  return routeArray.map(({ path, Component }, index) => (
    <Route key={index + path} path={path} element={Component} />
  ));
};

const getLinks = ()=>{
  const paths = {
    admin: [...getRoutes(adminRoutes),...getRoutes(userRoutes)],
    user: getRoutes(userRoutes),
    client: getRoutes(clientRoutes)
  }

  if(!userStore.isAuth) return null

  if(userStore.isAdmin) return paths.admin
  if(userStore.isUser) return paths.user
  else return paths.client
}


function AppRouter() {
  return (
    <Routes>
      {getLinks()}
      {getRoutes(publicRoutes)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default observer(AppRouter);
