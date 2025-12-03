import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export default function Header() {
    const { user, logout } = useContext(AuthContext)

    console.log("Current User State:", user);


    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <i className="bi bi-repeat fs-3 text-primary"></i>
                    <span className="fw-bold">SwapSkills</span>
                </Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/explore">استكشف</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/dashboard">لوحة التحكم</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/">عن المشروع</NavLink></li>
                    </ul>


                    <form className="d-flex me-3" role="search" onSubmit={e => e.preventDefault()}>
                        <input className="form-control form-control-sm" placeholder="ابحث عن مهارة أو شخص" />
                    </form>


                    <div className="d-flex align-items-center gap-2">
                        {user ? (
                            <>
                                <Link className="btn btn-outline-primary btn-sm" to="/profile/me">ملفك</Link>
                                <button className="btn btn-primary btn-sm" onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link className="btn btn-light btn-sm" to="/login">Login</Link>
                                <Link className="btn btn-primary btn-sm" to="/register">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}