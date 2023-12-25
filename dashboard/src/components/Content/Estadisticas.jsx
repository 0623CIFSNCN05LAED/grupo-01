import { useState, useEffect } from "react";
import UsersApi from "../../api/users";
function Estadisticas() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const resultado = await UsersApi();
        setTotalUsuarios(resultado.total);
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
            <span className="big">15</span>
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
