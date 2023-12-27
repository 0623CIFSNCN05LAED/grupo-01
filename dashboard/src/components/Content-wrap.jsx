import Estadisticas from "./Content/Estadisticas";
/*import Mujeres from './content/Mujeres'
import Hombres  from './Content/Hombres'*/
import Ventas from "./Content/Ventas";
/* import Productos  from './Content/Productos'
import Usuarios from './Content/Usuarios' */
import ProductosRecientes from "./Content/productos-recientes";
import MasVendidos from "./Content/Mas-vendidos";
import Categorias from "./Content/categorias";

function ContentWrap() {
  return (
    <>
      <main
        className="content-wrap"
        style={{
          maxHeight: "calc(100vh - 6rem)",
        }}
      >
        {/* <Productos />
      <Usuarios /> */}
        <Estadisticas />
        <Ventas />
        <ProductosRecientes />
        <MasVendidos />
        <Categorias />
      </main>
    </>
  );
}
export default ContentWrap;
