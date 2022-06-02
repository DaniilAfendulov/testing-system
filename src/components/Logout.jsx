import { Navigate } from 'react-router-dom';
import { logout } from '../utils/api.js';

function Logout() {
  logout();
  return (
    <Navigate to='/MasterLoginPage'/>
  )
}

export default Logout