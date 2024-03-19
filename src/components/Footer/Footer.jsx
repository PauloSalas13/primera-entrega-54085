import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <p><i className="fas fa-truck"></i> Envío a todo Chile</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p><i className="fas fa-credit-card"></i> Todo medio de pago</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p><i className="fas fa-shield-alt"></i> Pago 100% seguro</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p><i className="fas fa-headphones"></i> Atención en línea</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>Somos una pyme que tiene un respaldo como la mejor empresa de servicio de todo el 2023</p>
          </div>
          <div className="col-md-4">
            <h4>Enlace Rápido</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Categorías</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Atención a Cliente</h4>
            <ul>
              <li><a href="#">Contactenos</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Llamar a 2218180</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img src="/footer.png" alt="Imagen" className="img-fluid" style={{ maxWidth: '200px', margin: '20px auto' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;