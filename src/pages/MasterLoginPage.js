import {useState,useEffect} from 'react';
import MasterLoginForm from '../components/LoginForms/Master/MasterLoginForm'

const MasterLoginPage = () => {
    const [user, setUser] = useState({login:'', password:''});
    useEffect(() => {console.log(user)},[user]);
    const auth = (group, student) => {
        setUser({login: group, password: student});
    }
    return (
        <MasterLoginForm autorization={auth} />
    );
}
export default MasterLoginPage;
