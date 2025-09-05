import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function ProtectedRoute({children}){
const { user, loading } = useAuth()
const loc = useLocation()
if (loading) return <div className="container-max py-16">Loading...</div>
if (!user) return <Navigate to="/login" state={{ from: loc }} replace />
return children
}