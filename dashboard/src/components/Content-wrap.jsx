import Estadisticas from './Content/Estadisticas'
/*import Mujeres from './content/Mujeres'
import Hombres  from './Content/Hombres'*/
import Ventas from './Content/Ventas'
import Productos  from './Content/Productos'
import Usuarios from './Content/Usuarios'



function ContentWrap (){
    return(
        <>
         
         <main
      className="content-wrap"
      style={{
        maxHeight: "calc(100vh - 6rem)",
      }}
    >
      
      <Productos />
      <Usuarios />
      <Estadisticas />
         <Ventas />
    </main>



   
        
       </>
        
    );
}
export default ContentWrap