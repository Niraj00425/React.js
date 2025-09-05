import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-gray-50">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/listings" element={<Listings />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
{/* Example protected route (if you add a /dashboard later) */}
<Route path="/protected" element={
<ProtectedRoute>
<div className="container-max py-20">Only logged-in users can see this.</div>
</ProtectedRoute>
} />
</Routes>
</main>
<Footer />
</div>
)
}