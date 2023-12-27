import { useState, useEffect } from "react";
import UsersApi from "../../api/users";
import ProductApi from "../../api/products";
function Estadisticas() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const resultado = await UsersApi();
        const Productos = await ProductApi();
        setTotalUsuarios(resultado.total);
        setTotalProductos(Productos.total);
      } catch (error) {
        console.error("Error obteniendo usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
      <div className="info-boxes">
        <div className="info-box">
          <div className="box-icon">
            <i
              className="bi bi-qr-code"
              style={{
                fontSize: "1.5rem",
                color: "orange",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">{totalProductos}</span>
            Total productos
          </div>
        </div>

        <div className="info-box">
          <div className="box-icon">
            <i
              className="bi bi-person-circle"
              style={{
                fontSize: "2.5rem",
                color: "cornflowerblue",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">{totalUsuarios}</span>
            Total usuarios
          </div>
        </div>

        <div className="info-box active">
          <div className="box-icon">
            <i
              className="bi bi-currency-dollar"
              style={{
                fontSize: "2.5rem",
                color: "green",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">$ 489.567</span>
            Total ventas
          </div>
        </div>
      </div>
    </section>
  );
}
export default Estadisticas;
