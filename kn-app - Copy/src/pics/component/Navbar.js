import { Component } from "react";
import "./NavbarStyls.css";
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems";
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }
    render() {
        return (

            <nav className="NavbarItems">
                <h1 className="navbar-logo">Mr.Kartik M</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                
                    <i className={this.state.clicked ? "fas fa-times" :
                        "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? "nav-menu active" :"nav-menu"}>
                    {MenuItems.map((item, index) => {


                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i class={item.icon}></i>
                                    {item.title}
                                </Link>

                                
                                </li>
                                )
                            })}
                            <button><a href="http://jcer.in">JCER</a></button>
                  
                </ul>

            </nav>
        )

    }
}

export default Navbar;