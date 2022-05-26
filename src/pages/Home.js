import NavMenu from '../components/NavMenu';
  

const Home = () => {
    const items = [
        {label:"Home", to:"/"},
        {label:"StudentLoginPage", to:"/student/login"},
        {label:"MasterLoginPage", to:"/MasterLoginPage"},
        {label:"StudentMainPage", to:"/student"}
    ];
    return (
        <NavMenu items={items}/>
    );
}
export default Home;
