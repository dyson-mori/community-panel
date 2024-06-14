import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ token }: { token: string | null}) => {
  return token ? <Outlet /> : <Navigate to="/login" />
};
