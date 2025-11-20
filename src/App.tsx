import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/ui/LoadingScreen.tsx';
import Header from './components/layout/Header.tsx';
import HomePage from './pages/home/HomePage.tsx';
import CollaborationPage from './pages/collaboration/CollaborationPage.tsx';
import RoadmapCreator from './pages/roadmap/RoadmapCreatorPage.tsx';
import PersonalDashboard from './pages/dashboard/PersonalDashboardPage.tsx';
import Footer from './components/layout/Footer.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'collaboration':
        return <CollaborationPage />;
      case 'roadmap':
        return <RoadmapCreator />;
      case 'dashboard':
        return <PersonalDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;