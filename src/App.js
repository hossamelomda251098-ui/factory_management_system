import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Employees from './components/Employees';
import Attendance from './components/Attendance';
import Payroll from './components/Payroll';
import Leaves from './components/Leaves';
import Machines from './components/Machines';
import Utilities from './components/Utilities';
import Settings from './components/Settings';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <div className="app-container">
        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h2>🏭 المصنع</h2>
            <button 
              className="toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <Link to="/employees" className="nav-link">
              <span className="icon">👥</span>
              <span>الموظفين</span>
            </Link>
            <Link to="/attendance" className="nav-link">
              <span className="icon">⏰</span>
              <span>الحضور والانصراف</span>
            </Link>
            <Link to="/payroll" className="nav-link">
              <span className="icon">💰</span>
              <span>الرواتب</span>
            </Link>
            <Link to="/leaves" className="nav-link">
              <span className="icon">🏖️</span>
              <span>الإجازات والأذونات</span>
            </Link>
            <Link to="/machines" className="nav-link">
              <span className="icon">⚙️</span>
              <span>الماكينات والصيانة</span>
            </Link>
            <Link to="/utilities" className="nav-link">
              <span className="icon">💡</span>
              <span>المرافق</span>
            </Link>
            <Link to="/settings" className="nav-link">
              <span className="icon">⚙️</span>
              <span>الإعدادات</span>
            </Link>
          </nav>

          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <div>
                <p>{user.name}</p>
                <small>{user.role}</small>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              تسجيل الخروج
            </button>
          </div>
        </div>

        <div className="main-content">
          <header className="app-header">
            <h1>نظام إدارة المصنع 🏭</h1>
            <div className="header-actions">
              <span className="current-time" id="current-time"></span>
            </div>
          </header>

          <div className="content">
            <Routes>
              <Route path="/employees" element={<Employees />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/leaves" element={<Leaves />} />
              <Route path="/machines" element={<Machines />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Employees />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
