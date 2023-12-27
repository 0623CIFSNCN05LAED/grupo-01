import camisabeige from "../../assets/img/products/camisa-beige.jpg";
import yellowjacket from "../../assets/img/products/yellow-jacket.jpg";
import blacktshirt from "../../assets/img/products/blackt-shirt.jpg";
import amsterdamtop from "../../assets/img/products/amsterdam-top.jpg";
function MasVendidos() {
  return (
    <section className="content">
      <h2>Más Vendidos</h2>
      <article className="person-boxes">
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={camisabeige} alt="camisabeige" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Camisa Beige</h2>
            <p className="bio-position">$35000</p>
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
            <img src={yellowjacket} alt="yellowjacket" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Yellow Jacket</h2>
            <p className="bio-position">$85000</p>
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
            <img src={blacktshirt} alt="blacktshirt" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Black T-shirt</h2>
            <p className="bio-position">$21000</p>
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
            <img src={amsterdamtop} alt="amsterdamtop" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Top amsterdam</h2>
            <p className="bio-position">$15000</p>
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
  );
}
export default MasVendidos;
