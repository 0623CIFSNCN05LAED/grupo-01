import { useState, useEffect } from "react";
import ProductsApi from "../../api/products";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await ProductsApi();

      if (resultado && resultado.data) {
        setProductos(resultado.data);
        console.log("Datos obtenidos:", resultado.data);
      } else {
        console.error("La respuesta no contiene datos válidos:", resultado);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="table table-hover">
      <thead>
        <h1>Lista de Productos</h1>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Creado</th>
        </tr>
      </thead>
      <tbody>
        {productos &&
          productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td>
              <td>{producto.description}</td>
              <td>{producto.price}</td>
              <td>{producto.created_at}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Productos;
