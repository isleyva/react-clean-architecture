import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { Dashboard } from "./dashboard";
import { Home } from "./home";
import HomeGuard from "../../guards/home-guard";


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
