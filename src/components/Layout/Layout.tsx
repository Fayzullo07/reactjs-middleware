import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const pages = ['dashboard', 'wallets', 'transactions', 'investments', 'goals', 'bills', 'settings'];

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const currentPage = pathname.split('/')[1];
  const pageTitle = pages.includes(currentPage) ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1) : 'Dashboard';

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar />
      <div className="flex-1 ml-[260px] min-h-screen max-xl:ml-0">
        <header className="flex justify-between items-center px-8 py-6 bg-white sticky top-0 z-10 max-lg:px-4">
          <h1 className="text-[32px] font-medium text-gray-500 m-0 max-lg:text-2xl">{pageTitle}</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};
