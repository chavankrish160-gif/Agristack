import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import DiseaseScannerPage from './pages/DiseaseScannerPage';
import FarmerDashboard from './pages/FarmerDashboard';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/delivery" element={<DeliveryDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/disease-scanner" element={<DiseaseScannerPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
