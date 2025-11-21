import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: []
  });

  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Design', 'English'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setForm({ ...form, skills: [...form.skills, value] });
      } else {
        setForm({ ...form, skills: form.skills.filter(skill => skill !== value) });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('كلمة المرور غير متطابقة');
      return;
    }

    // حفظ كامل بيانات المستخدم
    localStorage.setItem('user', JSON.stringify(form));

    // حفظ الاسم والمهارات بشكل منفصل
    localStorage.setItem('userName', form.name);
    localStorage.setItem('userSkills', JSON.stringify(form.skills));

    alert('تم التسجيل بنجاح!');
    navigate('/profile');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">إنشاء حساب جديد</h2>
      <form className="mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="الاسم الكامل" className="form-control mb-3" onChange={handleChange} required />
        <input type="email" name="email" placeholder="البريد الإلكتروني" className="form-control mb-3" onChange={handleChange} required />
        <input type="password" name="password" placeholder="كلمة المرور" className="form-control mb-3" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="تأكيد كلمة المرور" className="form-control mb-3" onChange={handleChange} required />

        <div className="mb-3">
          <label className="form-label">اختر مهاراتك:</label>
          <div className="d-flex flex-wrap gap-2">
            {skillsList.map(skill => (
              <div className="form-check" key={skill}>
                <input className="form-check-input" type="checkbox" value={skill} id={skill} onChange={handleChange} />
                <label className="form-check-label" htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">تسجيل</button>
        <p className="mt-3 text-center">
          لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
      </form>
    </div>
  );
}
