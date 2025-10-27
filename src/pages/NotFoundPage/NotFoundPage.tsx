import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#5B4FE9] mb-4">404</h1>
          <div className="w-32 h-1 bg-[#5B4FE9] mx-auto mb-8 rounded-full"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Sahifa topilmadi
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Orqaga qaytish
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-[#5B4FE9] text-white rounded-lg font-semibold hover:bg-[#4a3fd8] transition-colors"
          >
            Bosh sahifaga
          </button>
        </div>

        <div className="mt-12">
          <svg
            className="w-64 h-64 mx-auto opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
