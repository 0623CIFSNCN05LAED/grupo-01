import Avatar from "../assets/img/avatar.jpg";
import JohnWick from "../assets/img/john-wick.jpg";
import Shazan from "../assets/img/shazan.jpg";
import TheMagiciansElephant from "../assets/img/the-magicians-elephant.jpg";
import Sniper from "../assets/img/sniper.jpg";

function ContentWrap (){
    return(
        <>
         <main className="content-wrap iconStyleCW">
        
        <header className="preventa">
          <h2>Preventa</h2>
          <div>
            <img src="../assets/img/banner.jpg" alt="Trolls 2" />
          </div>
          
        </header>
       
        <section className="content">
          <h2 className="mt-3">Estadísticas</h2>
          <div className="info-boxes">
            <div className="info-box">
              <div className="box-icon">
                <i
                  className="bi bi-film"
                  style="font-size: 2.5rem; color: cornflowerblue"
                ></i>
              </div>

              <div className="box-content">
                <span className="big">15</span>
                Cantidad de estrenos
              </div>
            </div>

            <div className="info-box">
              <div className="box-icon">
                <i
                  className="bi bi-tags-fill tags-fill"
                  
                ></i>
              </div>

              <div className="box-content">
                <span className="big">12</span>
                Categorías
              </div>
            </div>

            <div className="info-box active">
              <div className="box-icon">
                <i
                  className="bi bi-currency-dollar"
                  style="font-size: 2.5rem; color: green"
                ></i>
              </div>

              <div className="box-content">
                <span className="big">$ 489.567</span>
                Total ventas
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <h2>Próximos estrenos</h2>
          <table className="table shadow p-3 mb-5 bg-body-tertiary rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Director</th>
                <th scope="col">Fecha de estreno</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>SUPER MARIO BROS</td>
                <td>Aaron Horvath</td>
                <td>09 ABR. 2023</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>PONYO Y EL SECRETO DE LA SIRENITA</td>
                <td>Dan Fontain</td>
                <td>11 MAY. 2023</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>THE MARVELS</td>
                <td>Glor Medin</td>
                <td>27 JUL. 2023</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/*Fin Sección próximos estrenos*/}
        {/*Sección películas más populares*/}
        
        <section className="content">
          <h2>Más populares</h2>
          <article className="person-boxes">
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={Avatar} alt="Avatar" />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">Avatar: The Way of Water</h2>
                <p className="bio-position">Ciencia Ficción</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={JohnWick} alt="john-wick" />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">John Wick: Chapter 4</h2>
                <p className="bio-position">Acción</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={Shazan} alt="shazan" />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">Shazam! Fury of the Gods</h2>
                <p className="bio-position">Fantasía</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src="./assets/img/sayen.jpg" alt="sayen" />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">Sayen</h2>
                <p className="bio-position">Acción</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img
                  src={TheMagiciansElephant}
                  alt="Avatar"
                />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">The Magician&apos;s Elephant</h2>
                <p className="bio-position">Animación</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={Sniper} alt="sniper" />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">Sniper: The White Raven</h2>
                <p className="bio-position">Guerra</p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
          </article>
        </section>
        {/*Sección películas más populares */}
        {/*Sección de géneros de las películas*/}
        <section className="content">
          <h2 className="mt-3">Géneros</h2>
          <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button
              type="button"
              className="list-group-item list-group-item-action active text-center"
              aria-current="true"
            >
              Listado de géneros de las películas
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Acción
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Avetura
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Animación
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Documentales
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Drama
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Fantasía
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Terror
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
            >
              Romance
            </button>
          </div>
        </section>
        {/*Sección de géneros de las películas*/}
      </main>
        
       </>
        
    );
}
export default ContentWrap