import React, { Component } from 'react'
import './style.css'
import logo from './download.png'

 class NavBar extends Component {
    render() {
        return (
            <div className="main-nav" >
                <div className="nav-image">  <img src={logo} alt="logo" />  </div>
                <h1 className="main-heading" >POKEMON</h1>
            </div>
        )
    }
}

export default NavBar
