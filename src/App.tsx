import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import ContactsPage from "./components/pages/ContactsPage/ContactsPage";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/layout/Header/Header";
import MainSection from "./components/layout/MainSection/MainSection";

import { User } from "./types/User";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <Header
        isLoggedIn={!!user}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />

      <MainSection>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/profile" replace />
              ) : (
                <HomePage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              user ? (
                <ProfilePage user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </MainSection>
    </Router>
  );
};

export default App;
