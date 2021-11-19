// import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Navbar from './navegacion/Navbar';
import Inicio from './paginas/Inicio';
import ComoFunciona from './paginas/ComoFunciona';
import PagaPrestamo from './paginas/PagaPrestamo';
import PreguntasFrecuentes from './paginas/PreguntasFrecuentes';

function App() {
  return (
    <div className="main">
      <Navbar>
          <Router path='/' element={<Inicio/>} />
          <Router path='/como_funciona' element={<ComoFunciona/>} />
          <Router path='/paga_prestamo' element={<PagaPrestamo/>} />
          <Router path='/preguntas_frecuentes' element={<PreguntasFrecuentes/>} />
      </Navbar>
      <div className="primera-seccion">
        <div className="container">
          {/* Fila de enunciado y formulario */}
          <div className="row primera-seccion-uno">
            {/* Enunciado */}
            <div className="col enunciado-grande">
              <h1>
                ¡Creemos en ti y que Necesitas de un Amigazo que te ayude!
              </h1>
              <p>
                Consulta ahora mismo y en minutos te enviaremos el dinero a donde necesites.
              </p>
              <div className="row">
                <div className="col">
                  <button class="btn-azul">Como funciona &nbsp;&nbsp;&nbsp; <i class="fas fa-chevron-right"></i></button>
                </div>
                <div className="col">
                  <button class="btn-amarillo">Pagar &nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
            {/* Formulario */}
            <div className="col formulario-prestamo">
              <div className="carta-prestamo">
                <div className="div-titulo-carta">
                  <h1>¿Cuánto te prestamos?</h1>
                </div>
                <div className="numero">
                  <h1>$ 150.000</h1>
                </div>
                <div className="div-input-range">
                  <div className="row">
                    <input type='range' />
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="izquirda">Min. $100.000</p>
                    </div>
                    <div className="col">
                      <p className="derecha">Max. $500.000</p>
                    </div>
                  </div>
                </div>
                <div className="seleccion-opciones">
                  <p>¿A cuantas cuotas?</p>
                  <div className="row">
                    <div className="col">
                      <button className="button-active">1 Cuota &nbsp;&nbsp;<i class="far fa-check-circle"></i></button>
                    </div>
                    <div className="col">
                      <button>2 Cuotas</button>
                    </div>
                    <div className="col">
                      <button>3 Cuotas</button>
                    </div>
                  </div>
                  <p>¿Cuándo lo pagarías?</p>
                  <div className="row">
                    <div className="col">
                      <button>7 Días</button>
                    </div>
                    <div className="col">
                      <button>15 Días</button>
                    </div>
                    <div className="col">
                      <button className="button-active">30 Días &nbsp;&nbsp;<i class="far fa-check-circle"></i></button>
                    </div>
                  </div>
                </div>
                {/* body card */}
                <div className="body-formulario-prestamo">
                  <p className="titulo">Resumen de prestamo</p>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">Valor solicitado</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">$ 150.000</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">Días del prestamo</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">30</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">Intereses</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">-</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">Tarifa Administrativa 10%</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">$ 15.000</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">IVA Tarifa Administrativa</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">$ 2.850</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="suave izquierda">Consultar Perfil</p>
                    </div>
                    <div className="col">
                      <p className="suave derecha">$ 10.000</p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-8">
                      <p className="llenita izquierda">Total a Pagar por el Crédito</p>
                    </div>
                    <div className="col">
                      <p className="llenita derecha">$ 177.850</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="llenita izquierda">Fecha de Pago</p>
                    </div>
                    <div className="col">
                      <p className="llenita derecha">02 / 12 / 2021</p>
                    </div>
                  </div>
                </div>
                {/* footer card */}
                <div className="footer-card">
                  <h1>¡Solicítalo Ahora!</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row primera-seccion-dos">
            <h1>Únete a nuestro plan de referidos</h1>
            <hr />
            <p>Si tus amigos solicitan un prestamo con <b>tu código</b>, podrás recibir descuentos en los intereses de tu crédito actual y/o en tu tarifa administrativa de tu próximo crédito, entre más referidos tengas y que tus referidos paguen a tiempo, tendrás más beneficios.</p>
          </div>
          <div className="row primera-seccion-tres">
            <div className="col">IMAGEN</div>
            <div className="col">
              <div className="formulario">
                <h1>Ingresa tu cédula o número de documento</h1>
                <div>
                  <input type='number'/>
                </div>
                <p>Ingresa tus datos y te enviaremos un código a tu número de contacto que registraste en cuanto te uniste a nuestro grupo de amigazos una vez lo recibas puedes compartirlo con tus referidos y obtener beneficios</p>
                <div>
                  <button>Genera tú Código</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="segunda-seccion">
          <div className="container">
            <div className="titulo">
              <h1>3 beneficios para conseguir tu prestamo</h1>
              <hr/>
              <p>Consigue todo lo que necesitas, cubre esas urgencias de manera muy rápida, efectiva y lo mejor de la manera más segura y con los mejores intereses.</p>
            </div>
            <div className="row globos">
              <div class="col">IMAGEN</div>
              <div class="col">IMAGEN</div>
              <div class="col">IMAGEN</div>
            </div>
            <div>
              <p className="text-suave">
              * Sujetos a tiempos estimados en los procesos de autorización.
              </p>
            </div>
            <div className="titulo">
              <h1>Nuestros Requisitos</h1>
              <hr/>
              <p>Accede de manera muy sencilla a todos nuestros beneficios cumpliendo con muy pocos requisitos.</p>
            </div>
            <div className="row globos">
              <div class="col">IMAGEN</div>
              <div class="col">IMAGEN</div>
              <div class="col">IMAGEN</div>
            </div>
          </div>
        </div>
        <div className="tercera-seccion">
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
