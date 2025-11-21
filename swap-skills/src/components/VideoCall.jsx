import React from 'react'
import { useParams } from 'react-router-dom'


export default function VideoCall(){
const { id } = useParams()
return (
<div className="container py-5">
<h4 className="text-end">مكالمة فيديو (محاكاة)</h4>
<div className="card p-3 mt-3">
<div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
<div className="mock-video shadow-sm">Local video</div>
<div className="mock-video shadow-sm">Remote video ({id})</div>
</div>


<div className="d-flex justify-content-center gap-2 mt-3">
<button className="btn btn-danger">End</button>
<button className="btn btn-secondary">Mute</button>
<button className="btn btn-secondary">Camera</button>
</div>


<div className="mt-3 text-muted small">* واجهة محاكاة فقط — التكامل الحقيقي WebRTC + Signaling server.</div>
</div>
</div>
)
}