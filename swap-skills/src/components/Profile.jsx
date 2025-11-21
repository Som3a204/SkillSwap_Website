import React from 'react';

export default function Profile() {
  const name = JSON.parse(localStorage.getItem('userName')) || 'زائر';
  const have = JSON.parse(localStorage.getItem('userHave')) || [];
  const want = JSON.parse(localStorage.getItem('userWant')) || [];

  return (
    <div className="container py-5">
      <h3 className="text-end">البروفايل الشخصي</h3>
      <p className="text-end">مرحبًا {name}</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="text-end">المهارات التي أمتلكها</h5>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {have.map(skill => (
                <span key={skill} className="badge bg-primary">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="text-end">المهارات التي أريد تعلمها</h5>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {want.map(skill => (
                <span key={skill} className="badge bg-success">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
