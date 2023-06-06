
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./guards";
import Private from "./pages/private/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
        <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
