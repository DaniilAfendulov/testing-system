import {useState,useEffect} from 'react';
import MasterLoginForm from '../components/LoginForms/Master/MasterLoginForm'
import { auth as apiAuth } from '../utils/api' ;

const MasterLoginPage = () => {
    const [user, setUser] = useState({login:'', password:''});
    useEffect(() => {console.log(user)},[user]);
    const auth = (login, password) => {
        setUser({login: login, password: password});
        apiAuth(login, password);
    }
    return (
        <MasterLoginForm autorization={auth} />
    );
}
export default MasterLoginPage;
