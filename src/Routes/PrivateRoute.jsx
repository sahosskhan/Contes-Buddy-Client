/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <Loader/>
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}

export default PrivateRoute
