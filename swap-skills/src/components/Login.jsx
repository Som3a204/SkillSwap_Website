import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.email !== email || user.password !== password) {
      alert('الإيميل أو كلمة المرور خاطئة');
      return;
    }

    // حفظ الاسم والمهارات بعد تسجيل الدخول
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userSkills', JSON.stringify(user.skills));

    alert('تم تسجيل الدخول بنجاح!');
    navigate('/profile');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">تسجيل الدخول</h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <input type="email" placeholder="البريد الإلكتروني" className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="كلمة المرور" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary w-100">تسجيل الدخول</button>
        <p className="mt-3 text-center">
          ليس لديك حساب؟ <Link to="/register">إنشاء حساب</Link>
        </p>
      </form>
    </div>
  );
}
