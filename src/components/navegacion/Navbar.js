import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light menu">
            <div class="container-fluid">
                <a class="li-menu-bold" href="#">¡Amigazo!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="li-menu" to='/'>Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="li-menu" to='/como_funciona'>¿Cómo Funciona?</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="li-menu" to='/paga_prestamo'>Paga tu Prestamo</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="li-menu" to='/preguntas_frecuentes'>Preguntas Frecuentes</Link>
                        </li>
                    </ul>
                    <div class="d-flex perfil">
                        {/* <Link class="li-menu" to='/perfil'>Perfil</Link> */}
                        <i class="fas fa-user"></i>
                        <p>Tu perfil</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;