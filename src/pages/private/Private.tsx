import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import HomeGuard from "../../guards/home-guard";
import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));


export default function Private() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
      <Route path="*" element={<div>404 NOT FOUND</div>} />
      <Route element={<HomeGuard />}>
      <Route path={PrivateRoutes.HOME} element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}
