import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a className="navbar-brand" href="#">
        <img src="/header.png" alt="Logo" style={{ width: '50px', height: 'auto' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorías</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-search"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-user-plus"></i></a>
          </li>
          <li className="nav-item">
          <Cartwidget />
          
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
