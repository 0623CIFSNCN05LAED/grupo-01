import "./Search-wrap.css";
import Logo from "../assets/img/logo-M.png";
import { Link } from "react-router-dom";
function Menuwrap() {
  return (
    <>
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <Link to="/">
              <img src={Logo} alt="Logo Maunganui" />
            </Link>
          </div>
          <Link to="/">
            <figcaption>Maunganui</figcaption>
          </Link>
        </figure>
        <nav>
          <section className="dicover">
            <h3>Opciones</h3>
            <ul>
              <li>
                <Link to="/Productos">
                  <i className="bi bi-qr-code iconStyleMW"></i>- Productos
                </Link>
              </li>
              <li>
                <Link to="/Usuarios">
                  <i className="bi bi-person-circle iconStyleMW"></i>- Usuarios
                </Link>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-gender-male iconStyleMW"></i>- Hombre
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-gender-female iconStyleMW"></i>- Mujer
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-tags"></i>- Descuentos
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-graph-up"></i>- Estadísticas
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}
export default Menuwrap;
