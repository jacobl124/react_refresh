import React from 'react';
import {NavLink} from "react-router-dom";
function Nav(){
    return(

        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        List
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/store">
                        I
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/cart">
                        Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin">
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav