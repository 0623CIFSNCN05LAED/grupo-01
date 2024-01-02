import { useState, useEffect } from "react";
import ProductsApi from "../../api/products";
function Mujeres() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await ProductsApi();

      if (resultado && resultado.data) {
        const productoHombres = resultado.data.filter(
          (producto) => producto.genre_id === 1
        );
        setProductos(productoHombres);
        console.log("Datos obtenidos:", resultado.data);
      } else {
        console.error("La respuesta no contiene datos válidos:", resultado);
      }
    };

    fetchData();
  }, []);

  const generoMap = {
    0: "Femenino",
    1: "Masculino",
  };
  return (
    <table className="table table-hover">
      <thead>
        <h1>Lista de Productos de Hombre</h1>
        <tr>
          <th>Nombre</th>
          <th>Genero</th>
          <th>Codigo Sku</th>
        </tr>
      </thead>
      <tbody>
        {productos &&
          productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td>
              <td>{generoMap[producto.genre_id]}</td>
              <td>{producto.sku}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
export default Mujeres;
