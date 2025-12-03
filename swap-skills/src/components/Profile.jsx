import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../data/mockUsers'

export default function Profile() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
  
    if (id === 'me') {
  
      const localName = localStorage.getItem('userName');
      const localHave = JSON.parse(localStorage.getItem('userHave')) || [];
      const localWant = JSON.parse(localStorage.getItem('userWant')) || [];
      
      setProfileData({
        name: localName || 'مستخدم جديد',
        role: 'أنا',
        have: localHave,
        want: localWant
      });

    } else {

      const foundUser = users.find(u => u.id.toString() === id);
      setProfileData(foundUser);
    }
  }, [id]);

  if (!profileData) {
    return (
      <div className="container py-5 text-center">
        <h3>المستخدم غير موجود</h3>
        <Link to="/explore" className="btn btn-primary mt-3">العودة للاستكشاف</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h3 className="text-end text-primary mb-4">البروفايل الشخصي</h3>
      
      <div className="card shadow-sm mb-4">
        <div className="card-body text-center">
            <h2 className="fw-bold">{profileData.name}</h2>
            <p className="text-muted">{profileData.role}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card p-3 h-100 border-0 shadow-sm">
            <h5 className="text-end border-bottom pb-2">المهارات التي يمتلكها</h5>
            <div className="d-flex flex-wrap gap-2 mt-3 justify-content-end">
              {profileData.have && profileData.have.length > 0 ? (
                profileData.have.map((skill, index) => (
                  <span key={index} className="badge bg-primary fs-6 p-2">{skill}</span>
                ))
              ) : (
                <span className="text-muted">لا يوجد مهارات مضافة</span>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card p-3 h-100 border-0 shadow-sm">
            <h5 className="text-end border-bottom pb-2">المهارات التي يريد تعلمها</h5>
            <div className="d-flex flex-wrap gap-2 mt-3 justify-content-end">
              {profileData.want && profileData.want.length > 0 ? (
                profileData.want.map((skill, index) => (
                  <span key={index} className="badge bg-success fs-6 p-2">{skill}</span>
                ))
              ) : (
                <span className="text-muted">لا يوجد مهارات مطلوبة</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}