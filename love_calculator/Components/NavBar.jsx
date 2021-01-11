import React from 'react'
import style from "./style"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const NavBar = ()=>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
         <h1 style={style['.navbar-brand1']}>Love Calculator</h1>
        </nav>
        </>
    )
}

export default NavBar

