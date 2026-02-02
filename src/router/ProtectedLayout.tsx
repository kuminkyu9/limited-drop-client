import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLayout = () => {

  const checkUserLoginStatus = () => {
    return true;
  }

  if (!checkUserLoginStatus()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; 
};

export default ProtectedLayout;
