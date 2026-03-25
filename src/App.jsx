import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CycleProvider } from './context/CycleContext';
import { globalStyles } from './design/globalStyles';
import { Navbar, AnnouncementBanner } from './design/components';
import { TodayView } from './views/TodayView';
import { CalendarView } from './views/CalendarView';
import { SettingsView } from './views/SettingsView';

function AppContent() {
  const location = useLocation();
  
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/today' || path === '/') return 'Today';
    if (path === '/calendar') return 'Calendar';
    if (path === '/settings') return 'Settings';
    return 'Today';
  };

  const handleNavigate = (tab) => {
    window.location.href = `/${tab}`;
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
    <BrowserRouter>
      <CycleProvider>
        <AppContent />
      </CycleProvider>
    </BrowserRouter>
  );
}
