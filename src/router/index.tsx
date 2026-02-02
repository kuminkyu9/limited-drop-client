import type { RouteObject } from 'react-router-dom';

import Main from '@/screens/Main'

import LoginMain from '@/screens/account/LoginMain';
import RegisterMain from '@/screens/account/RegisterMain';
import WithdrawMain from '@/screens/account/WithdrawMain';

import ProtectedLayout from '@/router/ProtectedLayout'; 
import ProfileMain from '@/screens/ProfileMain';
import NotFoundPage from '@/screens/NotFoundPage';


export const appRoutes: RouteObject[] = [
  {path: '/', element: <Main />, },
  
  {path: '/login', element: <LoginMain />, },
  {path: '/register', element: <RegisterMain />, },
  {path: '/withdraw', element: <WithdrawMain />, },


  {path: '/', element: <ProtectedLayout />,
    children: [
      {path: 'main', element: <ProfileMain />, },
    ],
  },

  {path: '*', element: <NotFoundPage />, }
];
