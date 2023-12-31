import { useState, useEffect } from "react";
import UsersApi from "../../api/users";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await UsersApi();

      if (resultado && resultado.data) {
        setUsuarios(resultado.data);
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
        <h1>Lista de Usuarios</h1>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {usuarios &&
          usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.first_name}</td>
              <td>{usuario.last_name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Usuarios;
