import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Signup(){
const { signup } = useAuth()
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirm, setConfirm] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate = useNavigate()


async function onSubmit(e){
e.preventDefault()
setError('')
if (password !== confirm){
setError('Passwords do not match')
return
}
setLoading(true)
try {
await signup(email, password)
// name can be saved later to user profile if needed
navigate('/login')
} catch (e) {
setError(e.message)
} finally { setLoading(false) }
}


return (
<section className="container-max py-16">
<div className="max-w-md mx-auto card p-8">
<h1 className="text-2xl font-bold">Create an account</h1>
{error && <p className="mt-3 text-sm text-red-600">{error}</p>}
<form onSubmit={onSubmit} className="mt-6 space-y-4">
<div>
<label className="label">Name</label>
<input className="input" type="text" value={name} onChange={e=>setName(e.target.value)} required />
</div>
<div>
<label className="label">Email</label>
<input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
</div>
<div>
<label className="label">Password</label>
<input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
</div>
<div>
<label className="label">Confirm Password</label>
<input className="input" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required />
</div>
<button disabled={loading} className="btn-primary w-full">{loading? 'Creating account...' : 'Sign up'}</button>
</form>
<p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-primary underline">Log in</Link></p>
</div>
</section>
)
}