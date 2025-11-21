import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-end">
            <h1 className="display-5 fw-bold mb-3">SwapSkills — تبادل المهارات بسهولة</h1>
            <p className="lead text-muted">
              اعثر على شريك تعلّم، اتفقوا على الجلسات، وتبادلوا المهارات — البرمجة، اللغات، التصميم والمزيد.
            </p>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Link className="btn btn-primary btn-lg" to="/register">ابدأ مجانًا</Link>
              <Link className="btn btn-outline-primary btn-lg" to="/explore">استكشف المستخدمين</Link>
            </div>

            <div className="mt-4 text-end small text-muted">
              مصمم باستخدام React + Bootstrap — نسخة Frontend نهائية جاهزة للربط بالBackend.
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-lg hero-card p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="avatar-lg bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                  A
                </div>
                <div>
                  <h5 className="mb-0">جلسة تبادل الآن</h5>
                  <small className="text-muted">Aya تعلم HTML و Omar يتدرب على React</small>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-soft">HTML</span>
                <span className="badge bg-soft">CSS</span>
                <span className="badge bg-soft">JavaScript</span>
                <span className="badge bg-soft">React</span>
                <span className="badge bg-soft">Design</span>
                <span className="badge bg-soft">English</span>
              </div>

              <p className="text-muted">
                واجهة تفاعلية جاهزة مع صفحات profile، chat، و video-call (محاكاة). الموقع مُحسّن للعرض والـ UX.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h4 className="text-end">مزايا SwapSkills</h4>
            <div className="row mt-3">
              <div className="col-md-4 mb-3">
                <div className="feature p-3 h-100 shadow-sm rounded text-center">
                  <i className="bi bi-chat-dots fs-2 text-primary"></i>
                  <h6 className="mt-2">دردشة مباشرة</h6>
                  <p className="small text-muted">واجهة دردشة تفاعلية للتواصل والترتيب.</p>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="feature p-3 h-100 shadow-sm rounded text-center">
                  <i className="bi bi-camera-video fs-2 text-primary"></i>
                  <h6 className="mt-2">مكالمات فيديو</h6>
                  <p className="small text-muted">واجهة مكالمات جاهزة للربط بـ WebRTC لاحقًا.</p>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="feature p-3 h-100 shadow-sm rounded text-center">
                  <i className="bi bi-people fs-2 text-primary"></i>
                  <h6 className="mt-2">مجتمع متنوع</h6>
                  <p className="small text-muted">شارك مهاراتك مع أشخاص من جميع أنحاء العالم.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}