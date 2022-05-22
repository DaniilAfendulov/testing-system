import React, {useState,useEffect} from 'react';
import StudentLoginForm from '../components/LoginForms/Student/StudentLoginForm';

const StudentLoginPage = () => {
    const [user, setUser] = useState({group:'', student:''});
    useEffect(() => {console.log(user)},[user]);
    const auth = (group, student) => {
        setUser({group, student});
    }
    return (
        <StudentLoginForm autorization={auth} />
    );
}
export default StudentLoginPage;
