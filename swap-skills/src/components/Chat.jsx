import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../data/mockUsers'


export default function Chat(){
const { id } = useParams()
const partner = users.find(u=>u.id===id) || { name: 'User' }
const [messages, setMessages] = useState([
{ from: 'them', text: `أهلاً! أنا ${partner.name}. يلا نتبادل المهارات.` }
])
const [input, setInput] = useState('')
const boxRef = useRef(null)


useEffect(()=>{
if(boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight
},[messages])


function send(){
if(!input.trim()) return
setMessages(prev=>[...prev, { from: 'me', text: input }])
setInput('')
// simulate reply
setTimeout(()=> setMessages(prev=>[...prev, { from: 'them', text: 'حلو! إمتى يناسبك نبدأ؟' }]), 700)
}


return (
<div className="container py-5">
<h4 className="text-end">دردشة مع {partner.name}</h4>
<div className="card chat-card p-3 mt-3">
<div ref={boxRef} className="messages" style={{minHeight:260, maxHeight:360, overflowY:'auto'}}>
{messages.map((m,i)=> (
<div key={i} className={"d-flex mb-2 " + (m.from==='me'? 'justify-content-end':'') }>
<div className={"p-2 rounded " + (m.from==='me'? 'bg-primary text-white':'bg-light')}>{m.text}</div>
</div>
))}
</div>


<div className="input-group mt-3">
<input value={input} onChange={e=>setInput(e.target.value)} className="form-control" placeholder="اكتب رسالة..." onKeyDown={(e)=> e.key==='Enter' && send()} />
<button className="btn btn-success" onClick={send}><i className="bi bi-send"></i></button>
</div>


<div className="mt-3 text-muted small">* الدردشة مشتغلة محليًا كـ mock. للتشغيل الحقيقي نركب socket.io + backend.</div>
</div>
</div>
)
}