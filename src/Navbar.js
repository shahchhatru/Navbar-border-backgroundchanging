import'./App.css'
import NavbarItem  from './NavbarItem';
const Navbar=(props)=>{
    return(<div className="Navbar">
        <NavbarItem name="Home"/>
        <NavbarItem name="About"/>
        <NavbarItem name="Contact"/>
        <NavbarItem name="Login"/>
    </div>
    )
}

export default Navbar;