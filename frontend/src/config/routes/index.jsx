import React from 'react';
import LoginPage from '@pages/Login';
import RegisterPage from '@pages/Register';
import HomePage from '@pages/Home';
import UserPage from '@pages/User';

export const siteRoutes = [
  {
    path: '/',
    page: <HomePage />,
    isPrivate: false,
  },
  {
    path: '/login',
    page: <LoginPage />,
    isPrivate: false,
  },
  {
    path: '/register',
    page: <RegisterPage />,
    isPrivate: false,
  },
]

export const userRoutes = [
  {
    path: '/user',
    page: <UserPage />,
    isPrivate: true,
  },
];
