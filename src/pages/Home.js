import NavMenu from '../components/NavMenu';
  

const Home = () => {
    const items = [
        {label:"Home", to:"/"},
        {label:"StudentLoginPage", to:"/StudentLoginPage"},
        {label:"LeftPanelControlPage", to:"/LeftPanelControlPage"},
        {label:"MasterLoginPage", to:"/MasterLoginPage"}];
    return (
        <NavMenu items={items}/>
    );
}
export default Home;
