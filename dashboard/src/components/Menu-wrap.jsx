import './Search-wrap.css'
import Logo from "../assets/img/logo-M.png"
function Menuwrap (){
    return(
<>
<header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <img src={Logo} alt="Logo Maunganui" /> 
          </div>
          <figcaption>Maunganui</figcaption>
        </figure>
        <nav>
          <section className="dicover">
            <h3>Opciones</h3>
            <ul>
              <li>
                <a href="#">
                  <i
                    className="bi bi-qr-code iconStyleMW"
                    
                  ></i>
                  - Productos
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    className="bi bi-person-circle iconStyleMW"
                    
                  ></i>
                  - Usuarios
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    className="bi bi-gender-male iconStyleMW"
                  ></i>
                  - Hombre
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-gender-female iconStyleMW"></i>
                  - Mujer
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-tags"></i>
                  - Descuentos
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-graph-up"></i>
                  - Estadísticas
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
     
</>
    );
}
export default Menuwrap