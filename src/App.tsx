import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap, Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LanguageContext from './contexts/LanguageContext';
import { UserProvider, useUser } from './contexts/UserContext';

// Loading component for initial app load
const AppInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isInitializing } = useUser();

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-48 h-20 bg-white rounded-lg shadow-md mb-4">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
            <div className="text-left">
              <div className="text-xl font-bold text-blue-900">STEM</div>
              <div className="text-sm text-blue-600">Gharbiya</div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Loader2 className="animate-spin h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-700">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };

  return (
    <UserProvider>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <AppInitializer>
          <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'font-arabic text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Router>
            <Routes>
              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              {/* Public Routes with Navbar and Footer */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/programs" element={<Programs />} />
                      <Route path="/admissions" element={<Admissions />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </Router>
        </div>
        </AppInitializer>
      </LanguageContext.Provider>
    </UserProvider>
  );
}

export default App;