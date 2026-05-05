import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { MatchPage } from './pages/MatchPage';
import { ChatPage } from './pages/ChatPage';
import { EventsPage } from './pages/EventsPage';
import { SafetyPage } from './pages/SafetyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/safety" element={<SafetyPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}
