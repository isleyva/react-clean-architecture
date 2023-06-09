import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.api);
  console.log("user", userState);
  return userState.id && userState.status === "Alive" ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
