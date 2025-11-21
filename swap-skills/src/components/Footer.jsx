import React from 'react'
export default function Footer(){
return (
<footer className="bg-dark text-white py-4 mt-auto">
<div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
<div>
<strong>SwapSkills</strong> — تبادل المهارات.
<div className="small text-muted">جميع الحقوق محفوظة © {new Date().getFullYear()}</div>
</div>
<div className="mt-3 mt-md-0">
<a className="text-white me-2" href="#"><i className="bi bi-twitter"></i></a>
<a className="text-white me-2" href="#"><i className="bi bi-instagram"></i></a>
<a className="text-white" href="#"><i className="bi bi-github"></i></a>
</div>
</div>
</footer>
)
}