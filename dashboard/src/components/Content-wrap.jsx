import Estadisticas from "./Content/Estadisticas";
import Mujeres from "./content/Mujeres";
import Hombres from "./Content/Hombres";
import Ventas from "./Content/Ventas";
import Productos from "./Content/Productos";
import Usuarios from "./Content/Usuarios";
import ProductosRecientes from "./Content/productos-recientes";
import MasVendidos from "./Content/Mas-vendidos";
import Categorias from "./Content/categorias";
import { Route, Switch } from "react-router-dom";

function ContentWrap() {
  return (
    <>
      <main
        className="content-wrap"
        style={{
          maxHeight: "calc(100vh - 6rem)",
        }}
      >
        <Switch>
          <Route path="/Estadisticas">
            <Estadisticas />
            <ProductosRecientes />
            <Ventas />
            <Categorias />
          </Route>
          <Route path="/Usuarios">
            <Usuarios />
          </Route>
          <Route path="/Mujeres">
            <Mujeres />
          </Route>
          <Route path="/Hombres">
            <Hombres />
          </Route>
          <Route path="/Productos">
            <Productos />
            <MasVendidos />
          </Route>
          <Route path="*">
            <p>404 - página no encontrada</p>
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default ContentWrap;
