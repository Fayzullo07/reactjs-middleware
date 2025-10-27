import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout, ProtectedRoute } from './components';
import { BillsPage, DashboardPage, GoalsPage, Investments, LoginPage, NotFoundPage, Settings, TransactionsPage, Wallets } from './pages';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="wallets" element={<Wallets />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="investments" element={<Investments />} />
            <Route path="goals" element={<GoalsPage />} />
            <Route path="bills" element={<BillsPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
