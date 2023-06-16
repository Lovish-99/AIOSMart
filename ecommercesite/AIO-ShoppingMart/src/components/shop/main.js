import React from 'react';
import './main.css';
import { NavLink } from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <div class="shopnav">
                <hr/>
                <div class="meu">
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav1.png" alt="mobile" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/mobile1">Mobiles</NavLink>
                        </div>
                    </div>
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav6.png" alt="clothes" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/clothes1">Clothes</NavLink>
                        </div>
                    </div>
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav2.png" alt="laptop" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/laptop1">Laptops</NavLink>
                        </div>
                    </div>
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav3.png" alt="grocery" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/grocery1">Grocery</NavLink>
                        </div>
                    </div>
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav4.png" alt="appilances" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/appliances">Appliances</NavLink>
                        </div>
                    </div>
                    <div class="meu1">
                        <div class="meu2">
                            <img src="../img/nav5.png" alt="furniture" class="navlogo"/>
                        </div>
                        <div class="meu3">
                            <NavLink to="/furniture1">Furniture</NavLink>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}
export default Main;