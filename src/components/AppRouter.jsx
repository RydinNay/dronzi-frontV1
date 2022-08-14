import { Routes, Route, Navigate } from "react-router-dom";
import { userRoutes, publicRoutes, clientRoutes, adminRoutes } from "./routes";
import { observer } from "mobx-react-lite";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


const getRoutes = (routeArray) => {
  return routeArray.map(({ path, Component }, index) => (
    <Route key={index + path} path={path} element={Component} />
  ));
};

const getLinks = (isAuth, isUser, isAdmin)=>{

  const paths = {
    admin: [...getRoutes(adminRoutes),...getRoutes(userRoutes)],
    user: getRoutes(userRoutes),
    client: getRoutes(clientRoutes)
  }
  if(isAuth != true) return null
  if(isAdmin  === true) return paths.admin
  if(isUser  === true) return paths.user
  else return paths.client
}


function AppRouter() {
  const { isAuth } = useSelector(state => ({
    isAuth: state.users.isAuth
  }), shallowEqual)
  const { isUser } = useSelector(state => ({
      isUser: state.users.isUser
    }), shallowEqual)
  const { isAdmin } = useSelector(state => ({
      isAdmin: state.users.isAdmin
  }), shallowEqual)
  return (
    <Routes>
      {getLinks(isAuth, isUser, isAdmin)}
      {getRoutes(publicRoutes)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default observer(AppRouter);
