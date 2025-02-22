import React from 'react'
import "./styles.scss"
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav class="main-nav">
           
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </header>
  )
}

export default Header