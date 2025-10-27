import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: 'home', label: 'Dashboard', path: '/dashboard' },
    { icon: 'wallet', label: 'Wallets', path: '/wallets' },
    { icon: 'transactions', label: 'Transactions', path: '/transactions' },
    { icon: 'investments', label: 'Investments', path: '/investments' },
    { icon: 'goals', label: 'Goals', path: '/goals' },
    { icon: 'bills', label: 'Bills', path: '/bills' },
    { icon: 'settings', label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-white flex flex-col py-8 z-100 max-md:-translate-x-full max-md:transition-transform max-md:duration-300">
      <div className="px-6 pb-10">
        <h2 className="text-2xl font-bold m-0">
          <span className="text-[#5B4FE9]">Dash</span>
          <span className="text-gray-800">Board</span>
        </h2>
      </div>

      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3.5 cursor-pointer text-[15px] text-left no-underline transition-all duration-200 relative ${
                isActive
                  ? 'text-[#5B4FE9] bg-white rounded-r-lg border-l-4 border-[#5B4FE9]'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-lg'
              }`
            }
          >
            <span className="flex items-center justify-center w-6 h-6">
              {getIcon(item.icon)}
            </span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-4 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'User'}`}
            alt={user?.name || 'User'}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-semibold text-gray-800">{user?.name || 'User'}</div>
            <div className="text-xs text-gray-500">{user?.email || ''}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors border-none cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Chiqish
        </button>
      </div>
    </aside>
  );
};

const getIcon = (name: string) => {
  switch (name) {
    case 'home':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'wallet':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M1 10h22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'transactions':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'investments':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 17l-5-5-4 4-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'goals':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      );
    case 'bills':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2v6h6M16 13H8m8 4H8m2-8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'settings':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v10M1 12h6m6 0h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'reports':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'admin':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;
