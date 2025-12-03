import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { users } from '../data/mockUsers'


export default function Explore(){
const [query, setQuery] = useState('')
const [skillFilter, setSkillFilter] = useState('')


const SKILL_OPTIONS = Array.from(new Set(users.flatMap(u=>[...u.have, ...u.want]))).slice(0,30)


const filtered = users.filter(u => {
const q = query.trim().toLowerCase()
const byName = !q || u.name.toLowerCase().includes(q)
const bySkill = !skillFilter || u.have.includes(skillFilter) || u.want.includes(skillFilter)
return byName && bySkill
})


return (
<div className="container py-5">
<div className="d-flex justify-content-between align-items-center mb-3">
<h3 className="text-end">استكشف المستخدمين</h3>
<div className="d-flex gap-2">
<input className="form-control form-control-sm" placeholder="ابحث باسم" value={query} onChange={e=>setQuery(e.target.value)} />
<select className="form-select form-select-sm" value={skillFilter} onChange={e=>setSkillFilter(e.target.value)}>
<option value="">كل المهارات</option>
{SKILL_OPTIONS.map(s=> <option key={s} value={s}>{s}</option>)}
</select>
</div>
</div>


<div className="row">
{filtered.map(u => (
<div className="col-md-6 col-lg-4 mb-3" key={u.id}>
<div className="card p-3 h-100 shadow-sm">
<div className="d-flex justify-content-between align-items-start mb-2">
<div>
<h5 className="mb-0">{u.name}</h5>
<small className="text-muted">{u.bio}</small>
</div>
<div className="text-end">
<div className="badge bg-secondary mb-1">Has: {u.have.length}</div>
<div className="badge bg-success">Wants: {u.want.length}</div>
</div>
</div>
<div className="mb-2">
{u.have.map(s=> <span key={s} className="badge bg-light text-dark me-1">{s}</span>)}
</div>
<div className="d-flex justify-content-between mt-auto">
<Link className="btn btn-outline-primary btn-sm" to={`/profile/${u.id}`}>Profile</Link>
<Link className="btn btn-primary btn-sm" to={`/chat/${u.id}`}>Chat</Link>
</div>
</div>
</div>
))}


{filtered.length===0 && (
<div className="col-12 text-center py-5 text-muted">لا يوجد نتائج</div>
)}
</div>
</div>
)
}