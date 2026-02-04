import { Navigate, Outlet } from 'react-router-dom';
import { useIsLoggedIn } from '@/store/useAuthStore';

const ProtectedLayout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; 
};

export default ProtectedLayout;
