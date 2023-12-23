function ProductosRecientes() {
  return (
    <section className="content">
      <h2>Últimos ingresos</h2>
      <table className="table shadow p-3 mb-5 bg-body-tertiary rounded">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad en stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">09 ABR. 2023</th>
            <td>funnie jacket </td>
            <td> $50000</td>
            <td>25</td>
          </tr>
          <tr>
            <th scope="row">15 ABR. 2023</th>
            <td>jaredinera denim </td>
            <td>$35000</td>
            <td>30</td>
          </tr>
          <tr>
            <th scope="row">11 MAY. 2023</th>
            <td>remera teddy </td>
            <td>$18000</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">11 MAY. 2023</th>
            <td>Chaq </td>
            <td> $80000</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">20 JUN. 2023</th>
            <td>remera graffiti </td>
            <td> $25000</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default ProductosRecientes;
