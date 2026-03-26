import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CycleProvider } from './context/CycleContext';
import { globalStyles } from './design/globalStyles';
import { Navbar, AnnouncementBanner } from './design/components';
import { TodayView } from './views/TodayView';
import { CalendarView } from './views/CalendarView';
import { SettingsView } from './views/SettingsView';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveTab = () => {
    const path = location.pathname;
    if (path.endsWith('/today') || path === '/' || path === import.meta.env.BASE_URL) return 'Today';
    if (path.endsWith('/calendar')) return 'Calendar';
    if (path.endsWith('/settings')) return 'Settings';
    return 'Today';
  };

  const handleNavigate = (tab) => {
    navigate(`/${tab}`);
  };

  return (
    <>
      <style>{globalStyles}</style>
      

      <Navbar activeTab={getActiveTab()} onNavigate={handleNavigate} />

      <Routes>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/today" element={<TodayView />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/settings" element={<SettingsView />} />
        <Route path="*" element={<Navigate to="/today" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CycleProvider>
        <AppContent />
      </CycleProvider>
    </BrowserRouter>
  );
}
