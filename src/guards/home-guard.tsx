import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";

export const HomeGuard = () => {
  const userState = useSelector((store: AppStore) => store.api);
  console.log("user", userState);
  return userState.id === 3 ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.DASHBOARD} />
  );
};

export default HomeGuard;