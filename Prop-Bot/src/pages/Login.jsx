import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Login(){
const { login } = useAuth()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
const loc = useLocation()


async function onSubmit(e){
e.preventDefault()
setError('')
setLoading(true)
try {
await login(email, password)
const dest = loc.state?.from?.pathname || '/'
navigate(dest)
} catch (e) {
setError(e.message)
} finally { setLoading(false) }
}


return (
<section className="container-max py-16">
<div className="max-w-md mx-auto card p-8">
<h1 className="text-2xl font-bold">Log in</h1>
{error && <p className="mt-3 text-sm text-red-600">{error}</p>}
<form onSubmit={onSubmit} className="mt-6 space-y-4">
<div>
<label className="label">Email</label>
<input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
</div>
<div>
<label className="label">Password</label>
<input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
</div>
<button disabled={loading} className="btn-primary w-full">{loading? 'Logging in...' : 'Log in'}</button>
</form>
<p className="mt-4 text-sm">No account? <Link to="/signup" className="text-primary underline">Sign up</Link></p>
</div>
</section>
)
}