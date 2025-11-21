import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const SKILLS = ['HTML','CSS','JavaScript','React','Python','Design','English','Arabic']


export default function Dashboard(){
const { user } = useContext(AuthContext)
const [have, setHave] = useState([])
const [want, setWant] = useState([])


function toggle(skill, list, setter){
if(list.includes(skill)) setter(list.filter(s=>s!==skill))
else setter([...list,skill])
}


return (
<div className="container py-5">
<h3>Dashboard</h3>
<p>مرحبًا {user ? user.name : 'زائر'} — حدِّد المهارات اللي عندك وتحب تَتعلَّمها</p>


<div className="row mt-4">
<div className="col-md-6">
<div className="card p-3">
<h5>Skills I have</h5>
<div className="d-flex flex-wrap gap-2 mt-2">
{SKILLS.map(s=> (
<button key={s} className={"btn btn-sm " + (have.includes(s)? 'btn-primary':'btn-outline-secondary')} onClick={()=>toggle(s,have,setHave)}>{s}</button>
))}
</div>
<small className="text-muted mt-2 d-block">Selected: {have.join(', ') || '—'}</small>
</div>
</div>
<div className="col-md-6">
<div className="card p-3">
<h5>Skills I want</h5>
<div className="d-flex flex-wrap gap-2 mt-2">
{SKILLS.map(s=> (
<button key={s} className={"btn btn-sm " + (want.includes(s)? 'btn-success':'btn-outline-secondary')} onClick={()=>toggle(s,want,setWant)}>{s}</button>
))}
</div>
<small className="text-muted mt-2 d-block">Selected: {want.join(', ') || '—'}</small>
</div>
</div>
</div>


<div className="mt-4">
<p className="text-muted">* المؤشرات دي مكانها يترفّع للـ backend بعدين علشان نخزنها.</p>
</div>
</div>
)
}