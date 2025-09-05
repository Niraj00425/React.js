import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Navbar() {
const { user, logout } = useAuth()
const navigate = useNavigate()


async function handleLogout() {
try {
await logout()
navigate('/')
} catch (e) {
console.error(e)
}
}


return (
<header className="bg-white shadow-sm sticky top-0 z-30">
<div className="container-max flex h-16 items-center justify-between">
<Link to="/" className="text-xl font-bold text-primary">PropBot</Link>
<nav className="flex items-center gap-4">
<NavLink to="/" className={({isActive})=>`px-3 py-2 rounded-lg ${isActive? 'bg-gray-100' : ''}`}>Home</NavLink>
<NavLink to="/listings" className={({isActive})=>`px-3 py-2 rounded-lg ${isActive? 'bg-gray-100' : ''}`}>Listings</NavLink>
</nav>
<div className="flex items-center gap-3">
{user ? (
<>
<span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
<button onClick={handleLogout} className="btn-outline">Logout</button>
</>
) : (
<>
<Link to="/login" className="btn-outline">Login</Link>
<Link to="/signup" className="btn-primary">Sign up</Link>
</>
)}
</div>
</div>
</header>
)
}