import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { Dashboard } from "./dashboard";
import { Home } from "./home";

export default function Private() {
  return (
    <>
     <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
      <Route path="*" element={<div>404 NOT FOUND</div>} />
      <Route path={PrivateRoutes.HOME} element={<Home/>} />
    </>
  );
}
