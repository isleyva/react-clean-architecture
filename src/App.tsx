import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./guards";
import { Suspense, lazy } from "react";

const Private = lazy(() => import("./pages/private/Private"));
const Login = lazy(() => import("./pages/login/Login"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
