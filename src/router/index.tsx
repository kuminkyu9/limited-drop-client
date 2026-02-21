import type { RouteObject } from 'react-router-dom';

import Main from '@/screens/Main';
import ShopMain from '@/screens/shop/ShopMain';
import MypageMain from '@/screens/mypage/MypageMain';

import ProtectedLayout from '@/router/ProtectedLayout'; 
import NotFoundPage from '@/screens/NotFoundPage';

import LoginMain from '@/screens/account/LoginMain';

import ProductDetail from '@/screens/product/ProductDetail';

import CartMain from '@/screens/cart/CartMain';

export const appRoutes: RouteObject[] = [
  {path: '/', element: <Main />, },

  {path: '/product/:id', element: <ProductDetail />, },
  
  {path: '/shop/:tab/:page', element: <ShopMain />, },

  {path: '/login', element: <LoginMain />, },

  {path: '/', element: <ProtectedLayout />,
    children: [
      {path: 'mypage', element: <MypageMain />, },
      {path: 'cart', element: <CartMain />, },
    ],
  },

  {path: '*', element: <NotFoundPage />, }
];
