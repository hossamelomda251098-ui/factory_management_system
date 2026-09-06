import React, { useState } from 'react';
import './Login.css';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Demo login - في التطبيق الفعلي ستكون هناك المصادقة من Firebase
    if (username === 'admin' && password === '123456') {
      const user = {
        name: 'محمد أحمد',
        role: 'مدير النظام',
        email: username
      };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } else if (username && password) {
      const user = {
        name: username,
        role: 'موظف',
        email: username
      };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } else {
      setError('يرجى إدخال اسم المستخدم وكلمة المرور');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>🏭 نظام إدارة المصنع</h1>
          <p>تسجيل الدخول</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="أدخل اسم المستخدم"
            />
          </div>

          <div className="form-group">
            <label>كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            تسجيل الدخول
          </button>
        </form>

        <div className="login-footer">
          <p>بيانات تجريبية:</p>
          <small>اسم المستخدم: admin</small>
          <small>كلمة المرور: 123456</small>
          <small style={{ marginTop: '10px' }}>أو أدخل أي بيانات للدخول كموظف عادي</small>
        </div>
      </div>
    </div>
  );
}

export default Login;
