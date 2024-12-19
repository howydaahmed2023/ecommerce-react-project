import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 " >Collections</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
      </ul>
    <div className="buttons">
<Link href="#" className='btn btn-primary'>
  <i className='fa fa-sign-in me-1'></i> login
</Link>
<Link href="#" className='btn btn-primary ms-2'>
  <i className='fa fa-user-plus me-1'></i> signup
</Link>
<Link href="#" className='btn btn-primary ms-2'>
  <i className='fa fa-shopping-cart me-1'></i> Cart (0)
</Link>
    </div>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar